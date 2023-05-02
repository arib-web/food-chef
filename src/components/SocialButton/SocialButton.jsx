import React from 'react';
import './SocialButton.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const SocialButton = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const userLogInfo = result.user;
                setUser(userLogInfo)
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const userLogInfo = result.user;
                setUser(userLogInfo)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className=" social-button-container mt-3">
                <div className="" >
                    <img
                        onClick={handleGoogleLogin}
                        className=" social-button"
                        src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                        alt=""
                    />
                </div>
                <div className="">
                    <img
                        onClick={handleGithubLogin}
                        className=" social-button"
                        src="https://i.ibb.co/g9f4P0S/github-btn.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default SocialButton;