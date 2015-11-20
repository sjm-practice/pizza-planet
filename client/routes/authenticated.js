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
    BlazeLayout.render( 'default', { yield: 'pizzaProfile' } );
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
