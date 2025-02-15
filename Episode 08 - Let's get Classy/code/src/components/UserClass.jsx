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

// GitHu-API- https://api.github.com/users/DipanApril23

// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       count2: 1,
//     };

//     console.log(this.props.name+"Child Constructor");
//   }

//   incrementCount1 = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   incrementCount2 = () => {
//     this.setState((prevState) => ({
//       count2: prevState.count2 + 1,
//     }));
//   };

//   componentDidMount(){
//     console.log(this.props.name+'Child Component Did Mount');
//   }

//   render() {
//     const { name, location } = this.props;
//     const { count, count2 } = this.state;
//     console.log(this.props.name+"Child Render");

//     return (
//       <div className="user-card">
//         <h1>Count: {count}</h1>
//         <button onClick={this.incrementCount1}>Increment Count 1</button>

//         <h1>Count2: {count2}</h1>
//         <button onClick={this.incrementCount2}>Increment Count 2</button>

//         <h2>Name: {name}</h2>
//         <h3>Location: {location}</h3>
//         <h4>Contact: dipanmajumder55@gmail.com</h4>
//       </div>
//     );
//   }
// }

// export default UserClass;
/**
 * --- Mounting Phase ---
 * Constructor (Dummy Data)
 * Render (Dummy Data)
 *    <HTML (Dummy Data)>
 * ComponentDidMount
 *    <API Call>
 *    <this.setState> -> State variable is updated
 *
 * --- Updating Phase ---
 * Render(API Data)
 *    <HTML (New API Data)>
 * ComponentDidUpdate
 *
 */
