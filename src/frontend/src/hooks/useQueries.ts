import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { OrderInput } from "../backend.d.ts";
import { createActorWithConfig } from "../config";
import { useActor } from "./useActor";

export function useTotalOrderCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["totalOrderCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTotalOrderCount();
    },
    enabled: !!actor && !isFetching,
    staleTime: 60_000,
  });
}

export function useSubmitOrder() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: OrderInput): Promise<bigint> => {
      // Use existing actor or create a fresh anonymous one
      let activeActor = actor;
      if (!activeActor) {
        try {
          activeActor = await createActorWithConfig();
        } catch {
          throw new Error(
            "Unable to connect. Please check your internet connection and try again.",
          );
        }
      }
      return activeActor.submitOrder(input);
    },
    retry: 2,
    retryDelay: 1000,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["totalOrderCount"] });
    },
  });
}
