import Head from 'next/head'
import Navigation from "@/pages/navigation/navigation_discover";
import React, {useState} from "react";
import Exercise from "@/pages/trainingsplan/exercise-input"
import {addTrainingsplan} from "@/pages/user/variables";

export default function Home() {
    const [exerciseCount, setExerciseCount] = useState(1);

    return (
        <>
            {/*Header with title, icon and description*/}
            <Head>
                <title>Add Trainingsplan</title>
                <meta name="description" content="SweatMate by Rannegger & Zenz"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/sm-icon.svg"/>
            </Head>
            <main>
                {/*Navigation -> refers to navigation_discover.tsx*/}
                <Navigation/>

                <div>
                    <div className={"add-div-top"}>
                        <h2>Add Trainingsplan</h2>
                    </div>

                    <div className={"back-button-div"}>
                        <a className={"back-button"} href={"/discover"}>Go Back</a>
                    </div>

                    <div style={{marginTop: "25px"}}>
                        <label htmlFor={"name-tp"} className={"name-tp-label"}>Name of Trainingsplan</label>
                        <input type={"text"} className={"name-tp"} placeholder={"Name"} id={"name-tp"}/>
                    </div>
                </div>

                {Array.from({length: exerciseCount}).map((_, index) => (
                    <Exercise key={index}/>
                ))}

                <div className={"add-exercise"} onClick={() => setExerciseCount(exerciseCount + 1)}>
                    +
                </div>

                <button className={"post-trainingsplan"} onClick={() => addTrainingsplan()}>
                    Add
                </button>
            </main>
        </>
    )
}