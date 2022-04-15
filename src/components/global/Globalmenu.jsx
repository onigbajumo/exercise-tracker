import React from "react";
import '../../index.css'
import "./globalmenu.css";
import SchoolLogo from "../../assets/logo1.svg";
import {Link} from "react-router-dom";
import AdminB from '../../assets/icon/AdminB.svg';
import AdminC from '../../assets/icon/AdminC.svg';
import CoursesB from '../../assets/icon/CoursesB.svg';
import CoursesC from '../../assets/icon/CoursesC.svg';
import DashboardC from '../../assets/icon/DashboardC.svg';
import DashboardB from '../../assets/icon/DashboardB.svg';
import ExamC from '../../assets/icon/ExamsC.svg';
import ExamB from '../../assets/icon/ExamsB.svg';
import NewsB from '../../assets/icon/NewsB.svg';
import NewsC from '../../assets/icon/NewsC.svg';
import ResultB from '../../assets/icon/ResultsB.svg';
import ResultC from '../../assets/icon/ResultsC.svg';
import StudentsB from '../../assets/icon/StudentsB.svg';
import StudentsC from '../../assets/icon/StudentsC.svg';
import WebB from '../../assets/icon/WebB.svg';
import WebC from '../../assets/icon/WebC.svg';
import illumino from '../../assets/illumino.svg';
import {BiSearch} from 'react-icons/bi'


const GlobalMenu = () => {
    return(

        <section>


                {/* <div className="row header-container">
                        
                        <div className="col-9">
                        <img src={SchoolLogo} alt="" className="school-logo"/>
                        </div>
                    <div class="form-group col-3">
                        <span className="form-control-feedback"><BiSearch/></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div> 
                </div> */}
        <div className="global">

                   
            

          <div>
                

                <div className="menu-text">Main Menu</div>

                <ul className="nav-bar">
                    <li><Link to="/dashboard" className="nav-links" ><img src={DashboardB} alt="" className="grey" /><img src={DashboardC} alt="" className="color" />  <h7>Dashboard</h7> </Link></li>
                    <li><Link to="/exam-settings" className="nav-links" ><img src={ExamB} alt="" className="grey" /><img src={ExamC} alt="" className="color" /> <h7>Exams</h7> </Link></li>
                    <li><Link to="/student-menu" className="nav-links" ><img src={StudentsB} alt="" className="grey"/><img src={StudentsC} alt="" className="color"/> <h7>Students</h7>  </Link></li>
                    <li><Link to="/edit-course" className="nav-links"><img src={CoursesB} alt="" className="grey"/><img src={CoursesC} alt="" className="color"/> <h7>Courses</h7>  </Link></li>
                    <li><Link to="/admin-menu" className="nav-links"><img src={AdminB} alt="" className="grey"/><img src={AdminC} alt="" className="color"/> <h7>Administrators</h7> </Link></li>
                    <li><Link to="/proctoring" className="nav-links"><img src={WebB} alt="" className="grey"/><img src={WebC} alt="" className="color"/> <h7>Web Proctoring</h7> </Link></li>
                    <li><Link to="/news-info" className="nav-links"><img src={NewsB} alt="" className="grey"/> <img src={NewsC} alt="" className="color"/> <h7>News & Info</h7> </Link></li>
                    <li><Link to="/result" className="nav-links"><img src={ResultB} alt="" className="grey"  /><img src={ResultC} alt="" className="color"  /> <h7>Result</h7> </Link></li>
                </ul>
          </div>


          <div className="footer-side">
              <h7>©</h7>
              <img src={illumino} alt="" className="footer-logo"/>
          </div>
          
          
          </div>

          
            
        </section>
        )
}

export default GlobalMenu