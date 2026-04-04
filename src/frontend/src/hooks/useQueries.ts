import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { OrderInput } from "../backend.d.ts";
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
      if (!actor) throw new Error("Actor not ready");
      return actor.submitOrder(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["totalOrderCount"] });
    },
  });
}
