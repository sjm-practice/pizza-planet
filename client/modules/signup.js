let signup = ( options ) => {
  _validate( options.form, options.template );
};

let _validate = ( form, template ) => {
  $( form ).validate( validation( template ) );
};

let validation = ( template ) => {
  return {
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      emailAddress: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      password: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.'
      }
    },
    submitHandler() { _handleSignup( template ); }
  };
};

let _handleSignup = ( template ) => {
  let user = {
    email: template.find( '[name="emailAddress"]' ).value,
    password: template.find( '[name="password"]' ).value,
    profile: {
      customer: {
        userId: "",
        name: "",
        streetAddress: "",
        secondaryAddress: "",
        city: "",
        state: "",
        zipCode: "",
        telephone: ""
      }
    }
  };

  Accounts.createUser( user, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      Bert.alert( 'Welcome to Pizza Planet!', 'success' );
    }
  });
};

Modules.client.signup = signup;
