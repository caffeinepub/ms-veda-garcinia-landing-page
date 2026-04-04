import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type Order = {
    name : Text;
    phone : Text;
    address : Text;
  };

  module OrderLegacy {
    public func compare(order1 : Order, order2 : Order) : Order.Order {
      Nat.compare(order1.phone.size(), order2.phone.size());
    };
  };

  let orders = Map.empty<Nat, Order>();
  var nextId = 0;

  public type OrderInput = {
    name : Text;
    phone : Text;
    address : Text;
  };

  public shared ({ caller }) func submitOrder(input : OrderInput) : async Nat {
    if (input.name.trim(#char ' ').isEmpty()) {
      Runtime.trap("Name cannot be empty.");
    };
    if (input.phone.trim(#char ' ').isEmpty()) {
      Runtime.trap("Phone number cannot be empty.");
    };
    if (input.address.trim(#char ' ').isEmpty()) {
      Runtime.trap("Address cannot be empty.");
    };

    let orderId = nextId;
    orders.add(orderId, input);
    nextId += 1;
    orderId;
  };

  public query ({ caller }) func getTotalOrderCount() : async Nat {
    orders.size();
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray().sort();
  };
};
