import React from "react";
import "./header.css";
import GlobalMenu from "./Globalmenu";
import {BiSearch} from 'react-icons/bi';
import SchoolLogo from "../../assets/logo1.svg";

const Header = () => {
    return(
        <div className="row header-container">
            
           <div className="col-9">
           <img src={SchoolLogo} alt="" className="school-logo"/>
           </div>
        <div class="form-group col-3">
             <span className="form-control-feedback"><BiSearch/></span>
            <input type="text" className="form-control" placeholder="Search" />
        </div>
    
            
        </div>
    )
}

export default Header