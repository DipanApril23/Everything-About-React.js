const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <span>❤️</span>
        <a
          href="https://www.linkedin.com/in/dipan-majumder-a62760301/"
          target="_blank"
        >
          Dipan Majumder
        </a>
        <span>&copy;</span>
        {year}
        <strong>
          Belly<span>Box</span>
        </strong>
      </div>
    );
};

export default Footer;