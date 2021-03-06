import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import DataProvider from "./providers/DataProvider";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import UserShow from "./pages/UserShow";
import DoctorShow from "./pages/DoctorShow";
import AppointmentShow from "./pages/AppointmentShow";


const NotFound = ()=>{
  return <p>path not found</p>
}

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/users/:id" element={<UserShow/>} />
          <Route path="/doctors/:id" element={<DoctorShow/>} />
          <Route path="/appointments/:id" element={<AppointmentShow/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
