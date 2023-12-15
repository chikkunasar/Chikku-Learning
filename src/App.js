import React from "react";
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";

import LoginScreen from "./screens/login-page";
import ContactScreen from "./screens/contact-page";
import HomeScreen from "./screens/home-page";
import LandingScreen from "./screens/landing-page";
import ToDoScreen from "./screens/todo-app-page";
import UserLoginPage from "./screens/user-login";
import AccountCreationpage from "./screens/account-creation";
import Testcase from "./screens/testcase";
import UserProfile from "./screens/user-profile";
import GETAllUsers from "./screens/get-all-user";
import PostUserAccount from "./screens/post-user-account";
import LoginApi from "./screens/api-login";
import DummyIphone from "./screens/dummy-iphone";
import UnknownList from "./screens/list-user";
import CartList from "./screens/carts-test";
import PostTest from "./screens/posts-test";
import CommentsList from "./screens/comments-test"
import DummyProduct from "./screens/dummy-product";
import NodeGetApiPage from "./screens/node-get-api";
import CrudOperationPage from "./screens/crud-operation.js";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="todo" element={<ToDoScreen></ToDoScreen>}></Route>
        <Route path="signup" element={<UserLoginPage></UserLoginPage>}></Route>
        <Route path="account" element={<AccountCreationpage></AccountCreationpage>}></Route>
        <Route path="test" element={<Testcase></Testcase>}></Route>
        <Route path="creation" element={<UserProfile></UserProfile>}></Route>
        <Route path="all" element={<GETAllUsers></GETAllUsers>}></Route>
        <Route path="post" element={<PostUserAccount></PostUserAccount>}> </Route>
        <Route path="api" element={<LoginApi></LoginApi>}></Route>
        <Route path="iphone" element={<DummyIphone></DummyIphone>}></Route>
        <Route path="unknown" element={<UnknownList></UnknownList>}></Route>
        <Route path="cart" element={<CartList></CartList>}></Route>
        <Route path="pre" element={<PostTest></PostTest>}></Route>
        <Route path="comment" element={<CommentsList></CommentsList>}></Route>
        <Route path="product" element={<DummyProduct></DummyProduct>}></Route>
        <Route path="node" element={<NodeGetApiPage></NodeGetApiPage>}></Route>
        <Route path="crud" element={<CrudOperationPage></CrudOperationPage>}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App;