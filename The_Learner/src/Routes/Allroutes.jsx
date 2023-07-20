import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/Blog";
import CourseDetails from "../Pages/CourseDetails";
import Login from "../Pages/Login";
import Students from "../Pages/Students";
import NewAdmission from "../Pages/NewAdmission";
import Teacher from "../Pages/Teacher";
import Events from "../Pages/Events";
import Courses from "../Pages/Courses";
import Fees from "../Components/monetization/Fees";
import SignUp from "../Pages/SignUp";
import BlogPost from "../Pages/BlogPost";
import Privateroute from "./Privateroute";
import Home from "../Pages/Home";
import Header from "../Components/common/Header";
import Contact from "../Pages/Contact";

const Allroutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/couresDatails" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<Students />} />
        <Route path="/newAdmission" element={<NewAdmission />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/events" element={<Events />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogpost" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
