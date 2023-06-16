import Head from 'next/head'
import Navigation from "@/pages/navigation/navigation_discover";
import React from "react";
import Card from "@/pages/trainingsplan/trainingsplan-card";

export default function Home() {
    return (
        <>
            {/*Header with title, icon and description*/}
            <Head>
                <title>Discover</title>
                <meta name="description" content="SweatMate by Rannegger & Zenz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/sm-icon.svg" />
            </Head>
            <main>
                {/*Navigation -> refers to navigation_discover.tsx*/}
                <Navigation/>

                <div className={"discover-functions"}>
                    <div className={"discover-left-items"}>
                        <a href={"/add"}>
                            <button className={"add-button"}>+ Add</button>
                        </a>
                        <input className={"search-bar"} type={"search"} placeholder={"Search..."}/>
                    </div>
                </div>


                <div className={"card-grid"}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </main>
        </>
    )
}