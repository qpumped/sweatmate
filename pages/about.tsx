import Head from 'next/head'
import Image from 'next/image'
import { Heebo } from 'next/font/google'
import Navigation from "@/pages/navigation/navigation_about";
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