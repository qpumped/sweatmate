import React, {Component} from 'react';

class exerciseInput extends Component {


    render() {
        const handleInputChange = (event: any) => {
            alert("hello")
            console.log("handleInputChange()");
            const {id, value} = event.target;
            // @ts-ignore
            const {updateExerciseInputs} = this.props;
            updateExerciseInputs(id, value);
        }



        return (
            <div className={"exercise-input-top"}>
                <div className={"exercise-input-picture"}>
                    <img src={"/edit-icon.svg"} alt={"icon"}/>
                </div>
                <div className={"exercise-input-inputs"}>
                    <div style={{marginBottom: "50px"}}>
                        <label htmlFor={"name"}>Name</label>
                        <input type={"text"} className={"name"} placeholder={"Name"} id={"name"} onChange={() => handleInputChange}/>
                    </div>
                    <label htmlFor={"numSets"}>Number of Sets</label>
                    <label htmlFor={"numReps"}>Number of Reps</label>
                    <div className={"num-container"}>
                        <input type={"number"} className={"num"} placeholder={"0"} min={"0"} id={"numSets"} onChange={() => handleInputChange}/>
                        <input type={"number"} className={"num"} placeholder={"0"} min={"0"} id={"numReps"} onChange={() => handleInputChange}/>
                    </div>
                </div>
                <div className={"exercise-input-textarea"}>
                    <label htmlFor={"description"}>Description</label>
                    <textarea className={"description"} placeholder={"Describe how to do this exercise..."} id={"description"} onChange={() => handleInputChange}></textarea>
                </div>
            </div>
        );
    }
}

export default exerciseInput;