import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserProvider from "./components/context/Context";
import LandingPage from "./pages/LandingPage/LandingPage";
import { ToastContainer } from "react-toastify";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import { Login } from "./pages/Login/LoginPage";
import AccountVerification from "./pages/Account Verification/AccountVerification";
import Forgot from "./pages/ForgotPassword/Forgot";
import ResetPassword from "./components/ResetPassword Component/ResetPassword";
import OTPPage from "./pages/OtpPage/OTP";
import PasswordResetSuccess from "./components/ResetPassword Component/SuccessPage";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./components/Home/Home";
import AskDoctor from "./components/AskDoctor/AskDoctor";
import FindHospital from "./components/FindHospital/FindHospital";
import FirstAid from "./components/FirstAid/FirstAid";
import DoctorList from "./components/Doctors/DoctorList";
import ArticleList from "./components/Articles/ArticleList";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem("userInfo");
    const tokenFromStorage = localStorage.getItem("token");
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
    }
    if (tokenFromStorage) {
      setToken(JSON.parse(tokenFromStorage));
    }
  }, [setUserInfo, setToken]);

  return (
    <UserProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/verify"
            element={userInfo ? <LandingPage /> : <AccountVerification />}
          />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route
            path="/reset-password"
            element={!token ? <LandingPage /> : <ResetPassword />}
          />
          <Route
            path="/otp"
            element={userInfo ? <LandingPage /> : <OTPPage />}
          />
          <Route path="/success" element={<PasswordResetSuccess />} />
          <Route
            path="/dashboard"
            element={
              <>
                <Sidebar />
                <HomePage />
              </>
            }
          />
          <Route
            path="/askdoctor"
            element={
              <>
                <Sidebar />
                <AskDoctor />
              </>
            }
          />
          <Route
            path="/findhospital"
            element={
              <>
                <Sidebar />
                <FindHospital />
              </>
            }
          />
          <Route
            path="/firstaid"
            element={
              <>
                <Sidebar />
                <FirstAid />
              </>
            }
          />
          <Route
            path="/doctors"
            element={
              <>
                <Sidebar />
                <DoctorList />
              </>
            }
          />
          <Route
            path="/articles"
            element={
              <>
                <Sidebar />
                <ArticleList />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
