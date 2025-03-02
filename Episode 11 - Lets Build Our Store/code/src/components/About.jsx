import React from "react";
import UserClass from "./UserClass";
import "../styles/About.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showUser: false,
    };
  }

  toggleUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };

  render() {
    return (
      <div className="about-container" style={{ marginTop: "100px" }}>
        <div className="show-profile">
          {
            <button className="user-btn" onClick={this.toggleUser}>
              {this.state.showUser ? "Hide Developer Profile" : "Show Developer Profile"}
            </button>
          }
          {/* {this.state.showUser && <User />} */}
          {this.state.showUser && (
            <UserClass
              name={"Dipan Mazumder"}
              location={"WestBengal, Kolkata"}
            />
          )}
        </div>

        <div className="about">
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />{" "}
              <span>Tasty & Fresh Food</span>
            </h1>
            <h4>
              "Better you will feel if you eat a Belly<span>Box</span> healthy
              meal"
            </h4>
          </div>
          <div className="about-right">
            <img
              src="https://media.istockphoto.com/id/1139945949/photo/weird-and-bizarre-man-is-eating-fat-and-juicy-hamburger-it-is-not-a-healthy-food-but-the-guy.jpg?s=612x612&w=0&k=20&c=8dbdN7PFnF_qoSgnPZXfORX97LkPcqkKbpMkOmkjBOU="
              alt="Food Image"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default About;

