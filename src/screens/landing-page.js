import React from "react";
import {NavLink} from "react-router-dom";
import PostTest from "./posts-test";

const LandingScreen = () => {
  return(
    <div>
      <h1>This is the Landing Screen</h1>
      <NavLink to="/login">Go to Login Page</NavLink>
      <br />
      <NavLink to="/home">Go to Home Page</NavLink>
      <br />
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br />
      <NavLink to="/todo">Go to Todo App Page</NavLink>
      <br />
      <NavLink to="/signup"> Go to Signup Page</NavLink>
      <br />
      <NavLink to="/account"> Go to account Page</NavLink>
      <br />
      <NavLink to="/test"> Go to test Page</NavLink>
      <br />
      <NavLink to="/creation"> Go to user-profile Page</NavLink>
      <br />
      <NavLink to="/all"> To Load all pages </NavLink>
      <br />
      <NavLink to="/post"> To Load post account craetion page </NavLink>
      <br />
      <NavLink to="/api"> To Load login account craetion page </NavLink>
      <br />
      <NavLink to="/iphone"> To Load iphone account page </NavLink>
      <br />
      <NavLink to="/unknown"> To Load Unknown account page </NavLink>
      <br />
      <NavLink to="/cart"> To Load Cart page </NavLink>
      <br />
      <NavLink to="/pre">To Load post page</NavLink>
      <br />
      <NavLink to="/comment">To Load comments page</NavLink>
      <br />
      <NavLink to="/product">To Load product page</NavLink>
      <br />
      <NavLink to="/node">To Load Node JS page</NavLink>
      <br />
      <NavLink to="/crud">To Load Crud page</NavLink>
    </div>


  )
}

export default LandingScreen;