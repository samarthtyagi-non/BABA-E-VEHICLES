// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8PdA4U8la50C7UZ4XaPrLnPDjOPvdM70",
  authDomain: "baba-e-vehicles.firebaseapp.com",
  projectId: "baba-e-vehicles",
  storageBucket: "baba-e-vehicles.firebasestorage.app",
  messagingSenderId: "903371218753",
  appId: "1:903371218753:web:937da14af707a5c2e44bc0",
  measurementId: "G-6BHQ8J9Z2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Sample E-Rickshaw Data with AI-generated image URLs
const rickshaws = [
  {
    name: "BABA E-Rickshaw Model X",
    price: "₹1,50,000",
    features: "100 km range, 4-seater, Lithium-ion battery",
    image: "https://images.unsplash.com/photo-1597764691536-c933cf3f0b8d" // Replace with AI-generated or licensed image
  },
  {
    name: "BABA E-Loader",
    price: "₹1,70,000",
    features: "500 kg load, 80 km range, Strong chassis",
    image: "https://images.unsplash.com/photo-1648139502771-8a8759bfe656" // Replace with AI-generated or licensed image
  }
];

// Load rickshaws dynamically
const productList = document.getElementById("product-list");
rickshaws.forEach(r => {
  const el = document.createElement("div");
  el.className = "product";
  el.innerHTML = `
    <img src="${r.image}" alt="${r.name}" />
    <h3>${r.name}</h3>
    <p><strong>Price:</strong> ${r.price}</p>
    <p>${r.features}</p>
  `;
  productList.appendChild(el);
});

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this[0].value;
  const email = this[1].value;
  const message = this[2].value;

  db.ref("contacts").push({
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  });

  alert("Message sent successfully!");
  this.reset();
});
