import React, { useState } from 'react'
import "./LoginScreen.css"
import SignupScreen from './SignupScreen'
const LoginScreen = () => {
    const [SignIn, setSignIn] = useState(false)
    return (

        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="" />
                <button className='loginScreen__button' onClick = {()=> setSignIn(true)}>
                    Sign In
                </button>
                <div className="loginScreen__gradient" />
                <div className="loginScreen__body">
                    {SignIn ? (
                        <SignupScreen/>
                    ) : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder='Email Address' />
                                <button className="loginScreen__getStarted" onClick = {()=> setSignIn(true)}>Get Started</button>
                            </form>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginScreen