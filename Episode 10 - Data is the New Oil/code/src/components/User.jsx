import React from "react";
import { useState, useEffect } from "react";
import "../styles/User.css";

const User = () => {
  const [userInfo, setUserInfo] = useState({});

  async function getUserInfo() {
    try {
      const data = await fetch("https://api.github.com/users/DipanApril23");
      const json = await data.json();

      setUserInfo(json);
    } catch (error) {
      console.error("Error while fetching user data: :", error);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  const { name, location, avatar_url } = userInfo;
  return (
    <div className="profile-container">
      <div className="left-profile">
        <h1>About Me</h1>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <img className="profile-pic" src={avatar_url} alt="User Avatar" />
      </div>

      <div className="right-profile">
        <h1>My Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
