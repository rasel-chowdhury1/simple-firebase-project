/**
 *         ---------------------------
 *             Intial Instalation
 *         ---------------------------
 * 1-visit: console.firebase.google.com
 * 2-create project (skip google analytics)
 * 3-Register app (create config)
 * 4-install firebase: npm install firebase
 * 5-add config to your project
 * 6-DANGER: Do not publish or make firebase config to public by pushing those to github
           ---------------------------
                 Integration
           ---------------------------
* 7-visit: Go to Docs > Build >Authentication >Web > get started
 * 8-export app from the firebase.config.js file: export default app
 * 9-login.jsx: import getAuth from firebase/auth
 * 10- create const auth = getAuth(app)
            ---------------------------
                 Provider Setup
           ---------------------------
 * 11- import googleAuthProvider and create a new provider
 * 12- use signInWithPopUp and pass auth and provider
 * 13- activate sign method (google,facebook,github,etc)
 * 14- [vite]: change 127.0.0.1 to localhost
 */