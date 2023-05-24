import Head from 'next/head'
import Image from 'next/image'
import { Heebo } from 'next/font/google'
import Navigation from "@/pages/navigation/navigation_login";
import styles from '@/styles/Home.module.css'
import {width} from "dom-helpers";
import React from "react";

{/*Font*/}
const heebo = Heebo({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            {/*Header with title, icon and description*/}
            <Head>
                <title>Register</title>
                <meta name="description" content="SweatMate by Rannegger & Zenz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/sm-icon.svg" />
            </Head>
            <main>
                {/*Navigation -> refers to navigation_login.tsx*/}
                <Navigation/>
                {/*div with the image on the right*/}
                <div>
                    <img src={"/register-picture.svg"} alt={"GYM"} className={"picture-right"}/>
                </div>
                {/*div with the Text, Input fields and Buttons*/}
                <div className={"text-container"}>
                    <h1>Create Account</h1>
                    <h4>We are glad that you want to join us!</h4>
                    <div>
                        <form>
                            <div className="group">
                                <input type="text" required/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Username</label>
                            </div>
                            <div className="group">
                                <input type="text" required/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Firstname</label>
                            </div>
                            <div className="group">
                                <input type="text" required/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Lastname</label>
                            </div>
                            <div className="group">
                                <input type="text" required/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Email</label>
                            </div>
                            <div className="group">
                                <input type="password" required/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Password</label>
                            </div>
                            <div className="cb-flex-container">
                                    <div className="cbx">
                                        <input id="cbx" type="checkbox"/>
                                        <label htmlFor="cbx"></label>
                                    </div>
                                    <div>
                                        <p className="cbLabel">I agree to the <span style={{textDecoration: "underline"}}>Terms of Service</span> *</p>
                                    </div>
                            </div>
                        </form>
                    </div>
                    <div>
                        <a href={"/account"}>
                            <input className={"button-primary heebo.className"} type={"button"} value={"Create Account"}/>
                        </a>
                    </div>
                    <div>
                        <a href={"/login"}>
                            <input className={"button-tertiary heebo.className"} type={"button"} value={"Already have an account?"}/>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}