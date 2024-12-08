
    function signup() {
    const adminName = document.getElementById("s_username").value;
    const pass = document.getElementById("s_password").value;

    if (adminName && pass) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        users.push({
            username: adminName,
            password: pass
        });

        localStorage.setItem('users', JSON.stringify(users));
        console.log("Signed up user:", adminName);
        console.log("Signed up user password:", pass);

        document.getElementById("s_username").value = '';
        document.getElementById("s_password").value = '';
        alert("You have been successfully signed up!");
    } else {
        alert("Please fill in both username and password!");
    }
}

function login() {
    const username = document.getElementById("l_username").value;
    const password = document.getElementById("l_password").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        console.log("Logged in user:", user);
    } else {
        alert("Invalid credentials. Please try again.");
        console.log("No matching user found.");
    }
}


