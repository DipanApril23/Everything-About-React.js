import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props); // Call the super constructor with props

    // console.log("Inner Child - SocialProfileClass constructor() Called");
  }

  render() {

    return (
      <div className="social-media-container">
        <a
          href="https://www.linkedin.com/in/dipan-majumder-a62760301/"
          className="icon-button linkedin"
          target="_blank"
        >
          <i>
            <SiLinkedin />
          </i>
        </a>

        <a
          href="https://github.com/DipanApril23"
          className="icon-button github"
          target="_blank"
        >
          <i>
            <SiGithub />
          </i>
        </a>
        <a
          href={"mailto:" + "mailto:dipanmajumder55@gmail.com"}
          className="icon-button email"
        >
          <i>
            <SiGmail />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;
