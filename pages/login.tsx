import Head from 'next/head'
import Navigation from "@/pages/navigation/navigation_login";
import React, {useState} from "react";
import {login} from "@/pages/user/variables";

export default function Home() {
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            {/*Header with title, icon and description*/}
            <Head>
                <title>Login</title>
                <meta name="description" content="SweatMate by Rannegger & Zenz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/sm-icon.svg" />
            </Head>
            <main>
                {/*Navigation -> refers to navigation_login.tsx*/}
                <Navigation/>
                {/*div with the image on the right*/}
                <div>
                    <img src={"/login-picture.svg"} alt={"GYM"} className={"picture-right"}/>
                </div>
                {/*div with the Text, Input fields and Buttons*/}
                <div className={"text-container"}>
                    <h1>Log in to your SweatMate</h1>
                    <h4>Good to have you back!</h4>
                    <div className="wrapper">
                        <form onSubmit={()  => login(username, password)}>
                            <div className="group">
                                <input type="text"
                                       onChange={e => setUserName(e.target.value)}/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Username</label>
                            </div>
                            <div className="group">
                                <input type="password"
                                       onChange={e => setPassword(e.target.value)}/>
                                <span className="highlight"/>
                                <span className="bar"/>
                                <label>Password</label>
                            </div>
                            <div>
                                <input className={"button-primary heebo.className"} type={"submit"} value={"Log in"}/>
                            </div>
                            <div>
                                <a href={"/register"}>
                                    <input className={"button-tertiary heebo.className"} type={"button"} value={"Don't have an account?"}/>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}