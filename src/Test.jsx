import React, {Component} from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import GlobalMenu from "./components/global/Globalmenu";
import Header from "./components/global/Header";



const Test = () => {
    return(
        <section >
            <Header />

                <div className="main-container row">

                        <div className="col-2">
                        <GlobalMenu />
                        </div>
                


                        <div className="col-10 p-4 ">

                        <h1>Main Container</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Unde, culpa expedita maiores eum praesentium 
                            rerum nesciunt explicabo, nemo saepe doloribus 
                            temporibus perferendis ut iusto, atque delectus 
                            voluptate tenetur obcaecati magni!
                            
                        </p>


                        </div>
                </div>

        </section>
    )
}

export default Test