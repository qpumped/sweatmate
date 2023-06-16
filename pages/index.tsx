import Head from 'next/head'
import Navigation from "@/pages/navigation/navigation_home";
import React from "react";

export default function Home() {
  return (
    <>
      {/*Header with title, icon and description*/}
      <Head>
        <title>SweatMate</title>
        <meta name="description" content="SweatMate by Rannegger & Zenz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sm-icon.svg" />
      </Head>
      <main>
          {/*Navigation -> refers to navigation_home.tsx*/}
          <Navigation/>
          {/*div with the image for the home screen*/}
          <div>
              <img src={"/home-picture.svg"} alt={"GYM"} style={{ width: "100%" }}/>
          </div>
          {/*div container for the 3 different cards*/}
          <div className="cards-container">
              {/*div for the card*/}
              <div className="card-main">
                  <img className="card-icon" src={"/card-login-icon.svg"} alt={"Discover"}/>
                  <h2 className="card-title">Login</h2>
                  <p className="card-text">
                      Create or log into your Account and <span className={"card-text-bold"}>become a Sweat.</span>.
                  </p>
              </div>
              {/*div for the card*/}
              <div className="card-main">
                  <img className="card-icon" src={"/card-discover-icon.svg"} alt={"Discover"}/>
                  <h2 className="card-title">Discover</h2>
                  <p className="card-text">
                      <span className={"card-text-bold"}>Discover</span> many different Trainingplans which are created by Sweats.
                  </p>
              </div>
              {/*div for the card*/}
              <div className="card-main">
                  <img className="card-icon" src={"/card-likeordislike-icon.svg"} alt={"Discover"}/>
                  <h2 className="card-title">Like or Dislike</h2>
                  <p className="card-text">
                      <span className={"card-text-bold"}>Like or Dislike</span> different Trainingplans to save them and maybe also to try them out.
                  </p>
              </div>
          </div>
      </main>
        {/*<main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>*/}
    </>
  )
}
