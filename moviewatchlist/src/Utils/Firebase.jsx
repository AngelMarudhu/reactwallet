import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAozi6NcMKq8PESkOsfkcba3_RJqQneNQc",
  authDomain: "movie-watchlist-55f67.firebaseapp.com",
  projectId: "movie-watchlist-55f67",
  storageBucket: "movie-watchlist-55f67.firebasestorage.app",
  messagingSenderId: "76881466691",
  appId: "1:76881466691:web:af0be52141c401bbe24bf6",
  measurementId: "G-VFDV0T3FQF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export { auth, authProvider };
