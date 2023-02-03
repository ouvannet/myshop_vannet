import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import "./Header.css";

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location=useLocation();


    useEffect(() => {
        if(location.pathname === "/"){
            setActiveTab("Home")
        }
        else if(location.pathname === "/add"){
            setActiveTab("AddContact");
        }
        else if(location.pathname === "/about"){
            setActiveTab("About");
        }
    }, [location]);
  return (
    <div className="header">
        <p className='logo'>Vannet Shop</p>
        <div className='header-right'>
            <div style={{width:"30%"}}>
                <Link to="/">
                    <p className={`${activeTab=== "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
            </div>
            <div style={{width:"40%"}}>
                <Link to="/add">
                    <p className={`${activeTab=== "AddContact" ? "active" : ""}`} onClick={() => setActiveTab("AddContact")}>
                        Add Product
                    </p>
                </Link>
            </div>
            <div style={{width:"30%"}}>
                <Link to="/about">
                    <p className={`${activeTab=== "About" ? "active" : ""}`} onClick={() => setActiveTab("About")}>
                        About
                    </p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header