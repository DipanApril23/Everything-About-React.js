import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import "../styles/ProfileClass.css";

class profileClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props

    // console.log(props);
    // console.log("Parent - UserClass constructor() Called");

    // Initialize the state of the component
    this.state = {
      userInfo: {
        name: "Dipan Mazumder", // default values
        bio: "JavaScript | React.js | Node.js", // default values
        followers: 5, // default values
        avatar_url: "https://avatars.githubusercontent.com/u/198716226?v=4",
      },
    };
  }

  async getUserInfo() {
    try {
      const response = await fetch("https://api.github.com/users/DipanApril23");
      const json = await response.json();

      // console.log(json);

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error while fetching user data: ", error);
    }
  }

  componentDidMount() {
    // console.log("Parent - UserClass componentDidMount() Called");

    // this.timer = setInterval(() => {
    //   console.log("setInterval Called - Namaste React OP");
    // }, 1000);

    // API Calls (Fetch Data)
    this.getUserInfo();
  }

  componentDidUpdate() {
    // console.log("Parent - UserClass componentDidUpdate() Called");
  }

  componentWillUnmount() {
    // console.log("Parent - UserClass componentWillUnmount() Called");
    // clearInterval(this.timer);
  }

  render() {
    // console.log("Parent - UserClass render() Method Called");

    const { userInfo } = this.state; // object destructuring for json data

    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>

          {/* Passing props data (full json data) from parent to child */}
          <ProfileUserClass data={userInfo} />
        </div>

        <div className="repo-container">
          <h2 className="repo-title"></h2>

          {/* Passing props followers from parent to child */}
          <ProfileRepoClass followers={userInfo.followers} />
        </div>
      </div>
    );
  }
}

export default profileClass;
