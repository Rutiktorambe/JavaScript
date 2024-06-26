// User is only allowed to make a purchase when he is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// if (isLoggedIn) {
//   console.log("Logged IN Success");
//   if (isEmailVerified) {
//     console.log("Email is verified");
//     if (cardInfo) {
//       console.log("You can make a purchase");
//     }
//   }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("Allow user to make a purchase");
} else {
  console.log("You are NOT allowed to do that");
}


// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
  console.log("Login Success");
}



// Show user a signout button if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }

authenticated ? console.log("SignOut Button") : console.log("LOGIN");
