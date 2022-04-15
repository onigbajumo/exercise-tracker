  import React from "react";
  import {BrowserRouter, Routes, Route} from "react-router-dom";
  import "bootstrap/dist/css/bootstrap.min.css";

  import Test from './Test';
  import AddAdmin from "./admin/addadmin/Addadmin";
  import Header from "./components/global/Header";
  import Dashboard from "./admin/dashboard/Dashboard";
  import AdminMenu from "./admin/adminmenu/Adminmenu";
  import CoursesEdit from "./admin/courses/Coursesedit";
  import CoursesView from "./admin/courses/Coursesview";
  import ExamInformation from "./admin/examinformation/Examinformation";
  import ExamSettings from "./admin/examsettings/Examsettings";
  import AdminLogin from "./admin/adminlogin/Adminlogin";
  import NewsInfo from "./admin/newsinfo/Newsinfo";
  import Notification from "./admin/notification/Notification";
  import Proctoring from "./admin/proctoring/Proctoring";
  import Result from "./admin/result/Result";
  import Settings from "./admin/settings/Settings";
  import StudnetMenu from "./admin/studentmenu/Studentmenu";
  import Finished from "./student/finished/Finished";
  import Login from "./student/login/Login";
  import Question from "./student/question/Question";
  import Review from "./student/review/Review";




  const App = () => {
      return(
          
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Test />} />
            <Route path="header" element={<Header />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="admin-menu" element={<AdminMenu />} />
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="edit-course" element={<CoursesEdit />} />
            <Route path="view-course" element={<CoursesView />} />
            <Route path="exam-information" element={<ExamInformation />} />
            <Route path="exam-settings" element={<ExamSettings />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="news-info" element={<NewsInfo />} />
            <Route path="notification" element={<Notification />} />
            <Route path="result" element={<Result />} />
            <Route path="admin-settings" element={<Settings />} />
            <Route path="student-menu" element={<StudnetMenu />} />
            <Route path="proctoring" element={<Proctoring />} />
            <Route path="finished-exam" element={<Finished />} />
            <Route path="login" element={<Login />} />
            <Route path="proctoring" element={<Question />} />
            <Route path="review" element={<Review />} />
            <Route path="test" element={<Test />} />
          
        </Routes>
      </BrowserRouter>
      )
  }

  export default App