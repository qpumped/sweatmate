import Head from 'next/head'
import Navigation from "@/pages/navigation/navigation_about";
import React from "react";

export default function Home() {
    return (
        <>
            {/*Header with title, icon and description*/}
            <Head>
                <title>About</title>
                <meta name="description" content="SweatMate by Rannegger & Zenz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/sm-icon.svg" />
            </Head>
            <main>
                {/*Navigation -> refers to navigation_about.tsx*/}
                <Navigation/>

                
            </main>
        </>
    )
}