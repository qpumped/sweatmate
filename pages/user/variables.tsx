interface User {
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

export const userData: User = {
    username: "test",
    email: "",
    password: "",
    firstname: "",
    lastname: ""
};

export function login(username: string, password: string) {
    var _jwt;
    const user = {
        username : username,
        pwd : password
    };
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch('http://172.20.10.4:8080/sweatMate_TestProject-1.0-SNAPSHOT/api/login', init)
        .then(response => {
            if (!response.ok) {
                alert('username or login is incorrect!');
                throw Error('Error while login');
            }
            _jwt = response.headers.get('Authorization');
            return response.json();
        })
        .then(data => {
            console.log(data);
            // toDo: assign values to variables
            userData.username = data.username;
            userData.email = data.email;
            userData.password = data.pwd;
            userData.firstname = data.firstname;
            userData.lastname = data.lastname;
        })
        .catch(error => console.log(error));
}

export function logout() {
    userData.username = "";
    userData.email = "";
    userData.password = "";
    userData.firstname = "";
    userData.lastname = "";
}

interface Plan {

}

interface Exercise {

}

export const planData: Plan = {

};

export const exerciseData: Exercise = {
    name: "",
    numberOfSets: 0,
    numberOfReps: 0,
    description: ""
};

export function addTrainingsplan() {

}
