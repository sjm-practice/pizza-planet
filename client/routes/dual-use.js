const dualUseRoutes = FlowRouter.group({
  name: 'dualUse'
});

dualUseRoutes.route( '/order', {
  name: 'order',
  action() {
    BlazeLayout.render('default', {yield: 'order'});
  }
});


