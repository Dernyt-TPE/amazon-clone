import Home from './Home';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Order from './Order';
import ImageCarousel from './ImageCarousel';
import { useEffect } from 'react';
// import { getAuth } from "firebase/auth";
import { useStateValue } from './StateProvider';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";
import Footer from './Footer';


const public_stripe_key = loadStripe('pk_test_51JXL98SFUg7IDvGyQYN7RxQvxEoEUCp71e7dXiZ7LLSsO8pbMaj5vdxeRDwY6JcTCxIeMDwluQD4q2iD479NEXYH00DkpQzsUA');


function App() {
  const firebaseConfig = {

    apiKey: "AIzaSyBNSSq9M8ykdxHRUkb0mEa8OEqiLDAjLdg",
    authDomain: "clone-98dbc.firebaseapp.com",
    projectId: "clone-98dbc",
    storageBucket: "clone-98dbc.appspot.com",
    messagingSenderId: "716763877307",
    appId: "1:716763877307:web:38a880f4f37912e2ac3e9e",
    measurementId: "G-NLF9B813SV"
  };
  const app = initializeApp(firebaseConfig);

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // console.log("the User is ->", authUser);

  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  const auth = getAuth();
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the User is ->", authUser);

      if (authUser) {
        dispatch({
          type: 'Set-User', user: authUser,
        })

      } else {
        dispatch({ type: 'Set-User', user: null })

      }

    })
  }, []) //will only run when the app component loads..
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/order" >
            <Order />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path='/fo'>
            <ImageCarousel />
          </Route>

          <Route path="/payment">
            <Elements stripe={public_stripe_key}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">

            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
