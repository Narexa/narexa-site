import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjdPkvxRYD8S3lLyPjG6RI1kCrpj7ss6I",
    authDomain: "narexa-59361.firebaseapp.com",
    projectId: "narexa-59361",
    storageBucket: "narexa-59361.appspot.com",
    messagingSenderId: "740512279209",
    appId: "1:740512279209:web:f8398337172a4f906d97b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function updateVisitorCount() {
    const docRef = doc(db, "siteData", "visitorCount");
    const docSnap = await getDoc(docRef);
    
    let visitorCount = 0;
    if (docSnap.exists()) {
        visitorCount = docSnap.data().count;
    }
    
    visitorCount += 1;
    
    await setDoc(docRef, { count: visitorCount });
    
    const visitorCounterElements = document.querySelectorAll(".visitor-counter");
    visitorCounterElements.forEach(element => {
        element.innerText = `Visits: ${visitorCount}`;
    });
}

updateVisitorCount();

