interface User {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

export const userData: User = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: ""
};

export function login(username: string, password: string) {
    console.log("Username: " + username);
    console.log("Password: " + password);
    var _jwt;

    const user = {
        username : username,
        pwd : password
    };
    const init = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch('http://172.20.10.4:8080/sweatMate_TestProject-1.0-SNAPSHOT/api/login',  init)
        .then(response => {
            if (!response.ok) {
                throw Error('Error while login');
            }
            _jwt = response.headers.get('Authorization');

            localStorage.setItem("item", _jwt!!)

            return response.json();
        })
        .then(data => {
            console.log("DATA: " + data);
            userData.username = data.username;
            userData.email = data.email;
            userData.password = data.pwd;
            userData.firstname = data.firstname;
            userData.lastname = data.lastname;
        })
        .catch(error => {
            console.log(error);
        });
}

export function logout() {
    userData.username = "";
    userData.email = "";
    userData.password = "";
    userData.firstname = "";
    userData.lastname = "";
}

interface Plan {
    planId: number,
    planName: string,
    likes: number,
    dislikes: number,
    creatorId: number
}

interface PlanExercise {
    planId: number,
    exerciseId: number,
    num_reps: number,
    num_sets: number,
    details: string
}

interface Exercise {
    exerciseId: number,
    exerciseName: string,
    video: number[]
}

export const planData: Plan = {
    planId: 0,
    planName: "",
    likes: 0,
    dislikes: 0,
    creatorId: 0
};

export const planExerciseData: PlanExercise = {
    planId: 0,
    exerciseId: 0,
    num_reps: 0,
    num_sets: 0,
    details: ""
};

export const exerciseData: Exercise = {
    exerciseId: 0,
    exerciseName: "",
    video: [0, 0]
};

export function addTrainingsplan() {

}
