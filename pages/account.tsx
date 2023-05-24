import Head from 'next/head'
import Image from 'next/image'
import { Heebo } from 'next/font/google'
import Navigation from "@/pages/navigation/navigation_login";
import {userData, logout} from "@/pages/user/variables";
import React, { useState, useEffect } from 'react';

{/*Font*/}
const heebo = Heebo({ subsets: ['latin'] })

export default function Home(){
    return (
        <>
            {/*Header with title, icon and description*/}
            <Head>
                <title>Account Settings</title>
                <meta name="description" content="SweatMate by Rannegger & Zenz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/sm-icon.svg" />
            </Head>
            <main>

                {/*Navigation -> refers to navigation_login.tsx*/}
                <Navigation/>
                <div>
                    <div className="div-container-top">
                        <div className="flex-container">
                            <div>
                                <img src="/account-icon.svg" className="account-picture"/>
                            </div>
                            <div>
                                <h2>{userData.username}</h2>
                                <div className="likes-container">
                                    <img src="/like-icon.svg"/>
                                    <p>100</p>
                                    <img src="/dislike-icon.svg"/>
                                    <p>50</p>
                                </div>
                            </div>
                            <div className={"log-out-button"}>
                                <a onClick={logout} href={"/login"}>Log out</a>
                            </div>
                        </div>
                    </div>

                    <div className="account-trainings-plans">
                        <div>
                            <h2>Uploaded Training Plans (2)</h2>
                        </div>
                        <div>
                            <table className="account-trainings-plans-table">
                                <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Likes</th>
                                    <th>Dislikes</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Test Plan 1</td>
                                    <td>100</td>
                                    <td>5</td>
                                    <td><img src={"/settings-icon.svg"} alt={"Settings"}/></td>
                                </tr>
                                <tr>
                                    <td>Test Plan 2</td>
                                    <td>89</td>
                                    <td>12</td>
                                    <td><img src={"/settings-icon.svg"} alt={"Settings"}/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>




            </main>
        </>
    )
}