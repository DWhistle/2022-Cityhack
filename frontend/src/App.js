import TaskPage from "./components/TaskPage/HomePage"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route, useLocation } from "react-router-dom"
import Signin from "./components/Authentication/Signin/Signin"
import Signup from "./components/Authentication/Signup/Signup"
import Signout from "./components/Authentication/Signout/Signout"
import { checkUser, delUser, getUser } from "./redux/actions/userAction"
import Header from "./components/Header/Header"
import Greet from "./components/Greet/Greet"
import Footer from "./components/Footer/Footer"
import style from "./App.module.css"
import CreateTask from "./components/TaskPage/CrateTask/CreateTask"
import { allTasks } from "./redux/actions/tasksAc"
import { getAllUsers } from "./redux/actions/usersAc"
import UserProfile from "./components/UserProfile/UserProfile"
import EditUserProfile from "./components/UserProfile/EditUserProfile"
import { allComments } from "./redux/actions/commentsAc"
import { allFeedbacks } from "./redux/actions/feedbacksAc"
import CurrentTask from "./components/TaskPage/TaskList/CurrentTask/CurrentTask"
import { allMsg } from "./redux/actions/msgAc"
import ModerCompany from "./components/ModerCompany/ModerCompany"
import ListModCompany from "./components/ModerCompany/ListModCom/ListModCom"
import UploadTable from "./components/UploadTable/UploadTable"
import UserParam from "./components/UserProfile/UserParam"
import BigUpload from "./components/BigUpload/BigUpload"

function App() {

  function useScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  useScrollToTop()


  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(allTasks())
  }, [])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    dispatch(allFeedbacks())
  }, [])


  return (
    <div className={style.content}>
        <Header />
        <Routes>          
          <Route path="/" element={<Greet />} />
          <Route path="/moder" element={<ListModCompany />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/bigupload" element={<BigUpload />} />
          <Route path="/upload" element={<UploadTable />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="edit" element={<EditUserProfile />} />
          <Route path="items/:id" element={<CurrentTask />} />
          <Route path="moder/user/:id" element={<UserParam />} />
          {user ? (
            <Route path="signout" element={<Signout />} />
          ) : (
            <Route path="signin" element={<Signin />} /> && <Route path="signup" element={<Signup />} />
          )}
          <Route path="/items" element={<TaskPage />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
