
firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        //User is signed in
        document.getElementById("user-div").style.display = 'block';
        document.getElementById("login-div").style.display = 'none';
        document.getElementById("signup-div").style.display = 'none';

        var user = firebase.auth().currentUser;

        if(user != null) {

            var email_id = user.email;
            document.getElementById("userPara").innerHTML = "Welcome user... " + email_id;
        }
    }
    else {
        //No user signed in (When you first open page)
        document.getElementById("user-div").style.display = 'none';
        document.getElementById("login-div").style.display = 'block';
        document.getElementById("signup-div").style.display = 'none';
    }

});

const switchToSignUp = () => {
    document.getElementById("signup-div").style.display = 'block';
    document.getElementById("login-div").style.display = 'none';
}

const switchToLogin = () => {
    document.getElementById("signup-div").style.display = 'none';
    document.getElementById("login-div").style.display = 'block';
}

const signUp = () => {
    var userEmail = document.getElementById("email-field-signup").value;
    var userPass = document.getElementById("password-field-signup").value;

    window.alert(`User id and pass accepted`);

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
    });

}

const login = () => {
    var userEmail = document.getElementById("email-field-login").value;
    var userPass = document.getElementById("password-field-login").value;
    console.log(userEmail);

    var user = firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert(`Error has occured: ${userEmail}`);
        // ...
      });
}

const signOut = () => {
    firebase.auth().signOut().then(function() {
    window.alert(`Sign out successful`);


    document.getElementById("user-div").style.display = "none";
    document.getElementById("login-div").style.display = "block";
  }).catch(function(error) {
    // An error happened.
  });
}

