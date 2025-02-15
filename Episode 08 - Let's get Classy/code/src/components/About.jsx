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
              {this.state.showUser ? "Hide My Profile" : "Show My Profile"}
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

// import React, { Component } from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// import { Component } from "react";

// class About extends Component {
//   constructor(props){
//     super(props);

//     console.log('Parent Constructor');
//   }

//   componentDidMount() {
//     console.log('Parent Component Did Mount');
//   }

//   render() {
//     console.log('Parent Render');
//     return (
//       <div className="about" style={{ marginTop: "100px" }}>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <span>--------------------------------------------------</span>
//       {/* <User name={"Dipan(functional)"} location={"Kolkata(Functional)"} /> */}

//       <UserClass name={"First"} location={"Kolkata(Class)"} />
//       <span>---------------------------------------------------</span>
//       <UserClass name={"Second"} location={"US(Class)"} />
//       <span>---------------------------------------------------</span>
//       <UserClass name={"Third"} location={"WB(Class)"} />
//     </div>
//     )
//   }
// }
// export default About;

/*
This is not How LifeCycle methods are called when there are multiple childrens in a Component
- Parent constructor
- Parent render
  - First constructor
  - First Render
  - First componentDidMount
  - Second Strak constructor
  - Second Stark render
  - Second Stark componentDidMount
- Parent componentDidMount  
So if not this is not the way it works then how it works? lets see
reference diagram Link (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
so after seeing the diagram link we can see that the life cycle methods are called in the following order

- Parent constructor
- Parent render

  - First constructor
  - First Render
  - Second constructor
  - Second Render

  <DOM UPDATED - In SINGLE BATCH>
  - First componentDidMount
  - Second componentDidMount

- Parent componentDidMount  

Why react is doing this?
- React is doing this because it is following the concept of Virtual DOM and it is trying to optimize the rendering process by calling the life cycle methods in the above order so that it can update the DOM in the most efficient way possible and it is also trying to avoid the unnecessary rendering of the components which are not required to be rendered at that point of time. React trying to batches the updates and then it is trying to update the DOM in the most efficient way possible. React itself is trying to optimize the rendering process by calling the life cycle methods in the above order. thats why react is fast.
*/
