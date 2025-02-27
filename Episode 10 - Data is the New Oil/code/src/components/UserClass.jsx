import { Component } from "react";
import ProfileRepoClass from "./ProfileRepoClass";
import ProfileUserClass from "./ProfileUserClass";
import "../styles/UserClass.css";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dipan Mazumder",
        bio: "JavaScript | React.js | Node.js", // default values
        followers: 5, // default values
        avatar_url: "https://avatars.githubusercontent.com/u/198716226?v=4",
      },
    };
  }

  async getUserInfo() {
    try {
      const data = await fetch("https://api.github.com/users/DipanApril23");
      const json = await data.json();

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.error("Error while fetching user data: ", error);
    }
  }

  componentDidMount() {
    this.getUserInfo();
  }

  componentDidUpdate() {
    console.log("Child - UserClass componentDidUpdate() Called");
  }

  componentWillUnmount() {
    console.log("Child - UserClass componentWillUnmount() Called");

    // clearInterval(this.timer);
  }

  render() {
    const { userInfo } = this.state; // object destructuring for json data
    return (
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>

          {/* Passing props data (full json data) from parent to child */}
          <ProfileUserClass data={userInfo} />
        </div>

        <div className="repo-container">
          <h1 className="repo-title">
            Belly<span>Box</span> App Repository
          </h1>

          {/* Passing props followers from parent to child */}
          <ProfileRepoClass followers={userInfo.followers} />
        </div>
      </div>
    );
  }
}

export default UserClass;