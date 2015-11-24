Template.order.onCreated(function () {
  this.subscribe('order');

  this.currentOrder = new ReactiveDict();

  if (Meteor.user()) {
    this.currentOrder.set("type", "My Pizzas");
  } else {
    this.currentOrder.set("type", "Popular Pizzas");
  }

  this.currentOrder.set("pizza", {"name": "Pick a pizza!", "price": 0});
});

Template.order.events({
    'click .nav-tabs li': function(event, template) {
      var orderType = $(event.target).closest("li").data("pizza-type");

      template.currentOrder.set('type', orderType);

      if (orderType !== "Custom Pizza") {
        template.currentOrder.set("pizza", {"name": "Pick a pizza!", "price": 0});
      } else {
        template.currentOrder.set("pizza", {"name": "Build your custom pizza up above!", "price": 0});
      }
    }
});
