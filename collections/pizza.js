Pizza = new Meteor.Collection('pizza');

var PizzaSchema = new SimpleSchema({
  'name': {
    type: String,
    label: 'Name of Pizza'
  },
  'crust': {
    type: String,
    label: 'Type of Crust'
  },
  'toppings.meats': {
    type: [String],
    label: 'Meat Toppings',
    optional: true
  },
  'toppings.nonMeats': {
    type: [String],
    label: 'Non-Meat Toppings',
    optional: true
  },
  'price': {
    type: Number,
    label: 'Price'
  },
  'sauce': {
    type: String,
    label: 'Type of Sauce'
  },
  'size': {
    type: Number,
    label: 'Size of Pizza'
  },
  'custom': {
    type: Boolean,
    label: 'Custom Pizza'
  },
  'ownerId': {
    type: String,
    label: "Pizza Owner's User ID",
    optional: true
  }
});

Pizza.attachSchema(PizzaSchema);
