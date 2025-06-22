import React, { useState } from 'react';
import MainPageBody from '../components/main-page-components/MainPageBody';
import AboutSection from '../components/main-page-components/AboutSection';
import ContactSection from '../components/main-page-components/ContactSection';
import Footer from '../components/main-page-components/Footer';
import ChoosingSection from '../components/main-page-components/ChoosingSection';
import LoginForm from '../components/main-page-components/forms/LoginForm';
import RegisterForm from '../components/main-page-components/forms/RegisterForm';
import './MainPage.css';
import backgroundVideo from '../assets/background.mp4';

function MainPage() {
    // const [activeTab, setActiveTab] = useState('class');
    const [showChoosingSection, setShowChoosingSection] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
  
    const handleGetStarted = () => {
        setShowChoosingSection(true);
    };

    const handleRegister = () => {
        setShowRegisterForm(true);
    };

    const handleLoginUser = () => {
        setShowLoginForm(true);
    };

    const handleBackFromLogin = () => {
        setShowLoginForm(false);
    };

    const handleBackFromRegister = () => {
        setShowRegisterForm(false);
    };
  
    return (
        <>
        <div className="video-background">
            <video autoPlay muted loop id="myVideo">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
        </div>
        <MainPageBody onGetStarted={handleGetStarted} showChoosingSection={showChoosingSection} />
        <AboutSection />
        <ChoosingSection 
            showChoosingSection={showChoosingSection} 
            onRegister={handleRegister} 
            onLoginUser={handleLoginUser}
            showRegisterForm={showRegisterForm} 
            showLoginForm={showLoginForm}
        />
        <LoginForm showLoginForm={showLoginForm} onBack={handleBackFromLogin} />
        <RegisterForm showRegisterForm={showRegisterForm} onBack={handleBackFromRegister} />
        <ContactSection />  
        <Footer />
        </>
    );
}

export default MainPage;
