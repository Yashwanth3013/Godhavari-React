import React, { useEffect, useState } from "react";
import "./App.css";
// import firebase from "firebase/app";
// import "firebase/auth";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import AccountCreation from "./pages/AccountCreation";
import Otpscreen from "./pages/Otpscreen";
import ChangePassword from "./pages/ChangePassword";
import Apptype from "./pages/Apptype";
import NatureOfDocumentPOA from "./pages/NatureOfDocumentPOA";
import ImmovableMovable from "./pages/ImmovableMovable";
import AgriculturalNonAgricultural from "./pages/AgriculturalNonAgricultural";
import NatureofDocumentWill from "./pages/NatureofDocumentWill";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";
import PBhoomiSearch from "./pages/PBhoomiSearch";
import PViewPropertyBhoomi from "./pages/PViewPropertyBhoomi";
import Mojiniesketch from "./pages/Mojiniesketch";
import PNonagriculturalsearch from "./pages/PNonagriculturalsearch";
import NonAgriculturalSearch from "./pages/NonAgriculturalSearch";
import ViewPropertyNonAgricultural20 from "./pages/ViewPropertyNonAgricultural20";
import ViewPropertyNonAgricultural21 from "./pages/ViewPropertyNonAgricultural21";
import PPartyDetailsConsentingWitness from "./pages/PPartyDetailsConsentingWitness";
import DocumentfoApproval1 from "./pages/DocumentfoApproval1";
import PartyDetailsPresenter from "./pages/PartyDetailsPresenter";
import PartyDetailsExecutant1 from "./pages/PartyDetailsExecutant1";
import PartyDetailsExecutant2 from "./pages/PartyDetailsExecutant2";
import PPartyDetailsConsentingWitness1 from "./pages/PPartyDetailsConsentingWitness1";
import PPartyDetailsConsentingWitness2 from "./pages/PPartyDetailsConsentingWitness2";
import PPropertyschedule from "./pages/PPropertyschedule";
import PMarketValuation from "./pages/PMarketValuation";
import PMarketValuationNonAgriculturalVacantPlot from "./pages/PMarketValuationNonAgriculturalVacantPlot";

function App() {
  // const [viewOtpForm, setViewOtpForm] = useState(false);
  // const [user, setUser] = useState(false);
  // const firebaseConfig = {
  //   apiKey: "AIzaSyAR_NvMGpas5bRFx-550K1_jXtDlXubONA",
  //   authDomain: "godhavarireact.firebaseapp.com",
  //   projectId: "godhavarireact",
  //   storageBucket: "godhavarireact.appspot.com",
  //   messagingSenderId: "377379841212",
  //   appId: "1:377379841212:web:8e082e3b900008fb619cb9",
  // };

  // useEffect(() => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: "invisible",
  //       callback: function (response) {
  //         console.log("Captcha Resolved");
  //         this.onSignInSubmit();
  //       },
  //       defaultCountry: "IN",
  //     }
  //   );
  // }, []);

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // } else {
  //   firebase.app(); // if already initialized, use that one
  // }

  // const auth = firebase.auth();

  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     setUser(user);
  //   }
  // });

  // const loginSubmit = (e) => {
  //   e.preventDefault();

  //   let phone_number = "+91" + e.target.phone.value;
  //   const appVerifier = window.recaptchaVerifier;

  //   auth
  //     .signInWithPhoneNumber(phone_number, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       console.log("otp sent");
  //       setViewOtpForm(true);
  //       window.confirmationResult = confirmationResult;
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Error; SMS not sent
  //       // ...
  //       alert(error.message);
  //     });
  // };

  // const otpSubmit = (e) => {
  //   e.preventDefault();

  //   let opt_number = e.target.otp_value.value;

  //   window.confirmationResult
  //     .confirm(opt_number)
  //     .then((confirmationResult) => {
  //       console.log(confirmationResult);
  //       console.log("success");
  //       window.open("/", "_self");
  //     })
  //     .catch((error) => {
  //       // User couldn't sign in (bad verification code?)
  //       alert(error.message);
  //     });
  // };

  // const signOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       window.open("/signin", "_self");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       console.log(error);
  //     });
  // };
  return (
    <div>
      <Routes>
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Otpscreen" element={<Otpscreen />} />
        <Route path="/Accountcreation" element={<AccountCreation />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="/ApplicantDashboard" element={<Dashboard/>} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/EditProfile" element={<EditProfile/>}/>
        <Route path="/Apptype" element={<Apptype />} />
        <Route path="/NatureOfDocumentPOA" element={<NatureOfDocumentPOA />} />
        <Route path="/NatureofDocumentWill" element={<NatureofDocumentWill />}/>
        <Route path="/ImmovableMovable" element={<ImmovableMovable />} />
        <Route path="/AgriculturalNonAgricultural" element={<AgriculturalNonAgricultural />} />
        <Route path="/bhoomisearch" element={<PBhoomiSearch />} />
        <Route path="/viewpropertybhoomi"  element={<PViewPropertyBhoomi />} />
        <Route path="/" element={<Mojiniesketch />} />
        <Route path="/nonagrisearch" element={<PNonagriculturalsearch />} />
        <Route path="/Mojiniesketch" element={<Mojiniesketch />} />
        <Route path="/NonAgriculturalSearch" element={<NonAgriculturalSearch/>} />
        <Route path="/ViewPropertyNonAgricultural20" element={<ViewPropertyNonAgricultural20 />} />
        <Route path="/ViewPropertyNonAgricultural21" element={<ViewPropertyNonAgricultural21 />} />
        <Route path="/PPartyDetailsConsentingWitness" element={<PPartyDetailsConsentingWitness />} />
        <Route path="/DocumentfoApproval1" element={<DocumentfoApproval1 />} />
        <Route path="/PartyDetailsPresenter" element={<PartyDetailsPresenter />} />
        <Route path="/PartyDetailsExecutant1" element={<PartyDetailsExecutant1 />} />
        <Route path="/PartyDetailsExecutant2" element={<PartyDetailsExecutant2 />} />
        <Route path="/" element={<ViewPropertyNonAgricultural21 />} />
        <Route path="/PartyDetailsConsentingWitness1" element={<PPartyDetailsConsentingWitness1 />} />
        <Route path="/PartyDetailsConsentingWitness2" element={<PPartyDetailsConsentingWitness2 />} />
        <Route path="/propertyschedule" element={<PPropertyschedule />} />
        <Route path="/marketvaluation" element={<PMarketValuation />} />
        <Route path="/MarketValuationNonAgriculturalVacantPlot" element={<PMarketValuationNonAgriculturalVacantPlot />} />
     
        </Routes>
    </div>
  );
}
export default App;
