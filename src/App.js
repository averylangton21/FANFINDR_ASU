//Components
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Components/UserContext/UserContext";

//Pages
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import SchedulePost from "./Pages/SchedulePost";
import SportingEvents from "./Pages/SportingEvents";
import Messages from "./Pages/Messages";
import Review from "./Pages/Review";
import Analytic from "./Pages/Analytic";
import EmailConfirmation from "./Pages/EmailConfirmation/EmailConfirmation";

//AWS
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports';

Amplify.configure({
  ...awsconfig,
  Storage: {
    AWSS3: {
      bucket: 'fanfindrweb3471227a02f5465cad332f664cc4a783124052-dev',
      region: 'US East (Ohio) us-east-2',
    },
  },
});

function App() {

  //const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/register" exact Component={Register}></Route>
          <Route path="/login" exact Component={SignIn}></Route>
          <Route
            path="/dashboard" exact Component={Dashboard}
          //element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/schedulepost" exact Component={SchedulePost}></Route>
          <Route path="/sportingevents" exact Component={SportingEvents}></Route>
          <Route path="/messages" exact Component={Messages}></Route>
          <Route path="/reviews" exact Component={Review}></Route>
          <Route path="/analytics" exact Component={Analytic}></Route>
          <Route path="/emailconfirmation" exact Component={EmailConfirmation}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;