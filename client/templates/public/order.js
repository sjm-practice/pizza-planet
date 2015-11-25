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

Template.order.helpers({
  customer: function () {
    if (Meteor.user()) {
      var getCustomer = Customers.findOne({"userId": Meteor.userId()});
    } else {
      var getCustomer = {};
    }

    if (getCustomer) {
      getCustomer.context = "order";
      return getCustomer;
    }
  },

  order: function () {
    var currentOrder = Template.instance().currentOrder,
      type = currentOrder.get('type'),
      pizza = currentOrder.get('pizza'),
      price = currentOrder.get('price');

    if (type !== 'Custom Pizza') {
      var getPizza = pizza._id ? Pizza.findOne({"_id": pizza._id}) : pizza;
    } else {
      var getPizza = {
        name: 'Build your custom pizza up above!',
        price: 1000
      };
    }

    if (getPizza) {
      return {
        type: pizza.name !== 'Pick a pizza!' ? type : null,
        pizza: getPizza,
        price: getPizza.price
      }
    }
  }
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
