const publicRedirect = () => {
  if ( Meteor.userId() ) {
    // if going to a public route, and user is logged in, redirect to profile
    FlowRouter.go( 'profile' );
  }
};

const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/', {
  name: 'index',
  action() {
  BlazeLayout.render( 'default', { yield: 'index' } );
}
});

publicRoutes.route( '/order', {
  name: 'order',
  action() {
  // TODO - create order template, replace underConstruction
  BlazeLayout.render( 'default', { yield: 'underConstruction' } );
}
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

