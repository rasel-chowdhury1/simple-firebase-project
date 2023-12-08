import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user,setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const loggedUser = result.user
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error =>{
            console.log("error ",error.message)
        })
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
    const handleSignOut = () =>{
        signOut(auth)
        .then(result =>{
            alert("SuccessFull Logout");
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
            { user ?
            <button onClick={handleSignOut}>Sign Out</button>
             :<div>
                <button onClick={handleGoogleSignIn}>google login</button>
                <button onClick={handleGithubSignIn}>github login</button>
             </div>
            }
            {
                user && 
                <div>
                    <h2>User: {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;