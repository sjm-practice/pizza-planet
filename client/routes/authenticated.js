const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    // if going to an authenticated route, and user is not logged in, redirect to index
    FlowRouter.go( 'index' );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/profile', {
  name: 'profile',
  action() {
  // TODO - create profile (aka pizzaProfile) template, replace underConstruction
    BlazeLayout.render( 'default', { yield: 'underConstruction' } );
  }
});

authenticatedRoutes.route('/logout', {
  name: 'logout',
  action() {
    Meteor.logout();
    Bert.alert('Logged out!', 'success');
    FlowRouter.go(FlowRouter.path('index'));
  }
});
