import React, { Component } from 'react';

class exerciseInput extends Component {
    render() {
        return (
            /*div that goes over everything --> columns*/
            <div className={"exercise-input-top"}>
                <div className={"exercise-input-picture"}>
                    <img src={"/edit-icon.svg"}/>
                </div>
                <div className={"exercise-input-inputs"}>
                    <div style={{marginBottom: "50px"}}>
                        <label htmlFor={"name"}>Name</label>
                        <input type={"text"} className={"name"} placeholder={"Name"} id={"name"}/>
                    </div>
                    <label htmlFor={"numSets"}>Number of Sets</label>
                    <label htmlFor={"numReps"}>Number of Reps</label>
                    <div className={"num-container"}>
                        <input type={"number"} className={"num"} placeholder={"0"} min={"0"} id={"numSets"}/>
                        <input type={"number"} className={"num"} placeholder={"0"} min={"0"} id={"numReps"}/>
                    </div>
                </div>
                <div className={"exercise-input-textarea"}>
                    <label htmlFor={"description"}>Description</label>
                    <textarea className={"description"} placeholder={"Describe how to do this exercise..."} id={"description"}></textarea>
                </div>
            </div>
        );
    }
}

export default exerciseInput;