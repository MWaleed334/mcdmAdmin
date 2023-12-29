import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ManageAcc from "../Inner/ManageAcc"
import PersonalInfo from "../Inner/Personalnfo"
import ChangePass from '../Inner/ChangePass';
import UsersDash from '../Main/UsersDash';
import Dashboard from '../Inner/Dashboard';
import RenewSub from '../Inner/RenewSub';
import AdminDash from '../Main/AdminDash';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersDash />} />
        <Route path="/manageAcc" element={<ManageAcc/>} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path="/changePass" element={<ChangePass/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/renewsub" element={<RenewSub/>} />
        <Route path="/admindash" element={<AdminDash/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;