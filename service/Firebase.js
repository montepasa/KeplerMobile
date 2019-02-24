import firebase from "firebase";
var config = {
    apiKey: "AIzaSyA_cM5m7t298a_j-M86MBZHLVRmEYS2LbY",
    authDomain: "motto-connect.firebaseapp.com",
    databaseURL: "https://motto-connect.firebaseio.com",
    projectId: "motto-connect",
    storageBucket: "motto-connect.appspot.com",
    messagingSenderId: "133460564523"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const userLogin = (email, password) => {
    console.log("email", email);
    console.log("password", password);
    console.log("ibrahim", password);
    return new Promise(resolve => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('Invalid email address format.');
                        break;
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                        alert('Invalid email address or password');
                        break;
                    default:
                        alert('Check your internet connection');
                }
                resolve(null);
            }).then(response => {
                if (response) {
                    resolve(response);
                    console.log(response.user.uid);
                }
            });
    })
};
  
export const  sendEmailWithPassword = (email) => {
    return new Promise(resolve => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                console.warn('Email with new password has been sent');
                resolve(true);
            }).catch(error => {
                switch (error.code) {
                    case 'auth/invalid-email':
                        console.warn('Invalid email address format');
                        break;
                    case 'auth/user-not-found':
                        console.warn('User with this email does not exist');
                        break;
                    default:
                        console.warn('Check your internet connection');
                }
                resolve(false);
            });
    })
};

export const createFireBaseAccount = (email, password) => {
        return new Promise(resolve => {
            firebase.auth().createUserWithEmailAndPassword( email,  password).catch(error => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        console.warn('This email address is already taken');
                        break;
                    case 'auth/invalid-email':
                        console.warn('Invalid e-mail address format');
                        break;
                    case 'auth/weak-password':
                        console.warn('Password is too weak');
                        break;
                    default:
                        console.warn('Check your internet connection');
                }
                resolve(false);
            }).then(info => {
                console.log("ibrahim bilgi", info);
            });
        });
};


 
  


