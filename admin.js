// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB8PdA4U8la50C7UZ4XaPrLnPDjOPvdM70",
  authDomain: "baba-e-vehicles.firebaseapp.com",
  databaseURL: "https://baba-e-vehicles-default-rtdb.firebaseio.com",
  projectId: "baba-e-vehicles",
  storageBucket: "baba-e-vehicles.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Login function
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      loadContacts();
    })
    .catch(err => alert("Login failed: " + err.message));
}

// Logout
function logout() {
  auth.signOut().then(() => {
    location.reload();
  });
}

// Load Contact Submissions
function loadContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = "Loading...";

  db.ref("contacts").on("value", snapshot => {
    list.innerHTML = "";
    snapshot.forEach(child => {
      const data = child.val();
      const item = document.createElement("li");
      item.innerText = `${data.name} (${data.email}): ${data.message}`;
      list.appendChild(item);
    });
  });
}
