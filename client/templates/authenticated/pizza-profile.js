Template.pizzaProfile.onCreated(function () {
  this.subscribe('pizzaProfile');
});

Template.pizzaProfile.helpers({
  customer: function () {
    var getCustomer = Customers.findOne({'userId': Meteor.userId()});
    if (getCustomer) {
      getCustomer.context = 'profile';
      return getCustomer;
    }
  }
});
