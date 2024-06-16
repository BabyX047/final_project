import {Link} from 'react-router-dom';

function Footer() {
    return (
    <footer className="text-body-secondary py-5 border-top mt-5">
        <div className="container">
            <p className="float-end mb-1">
            <a href="#">Back to top</a>
            </p>
            <p className="mb-1">Made by Lewis © Copyright 2024</p>
            <p className="mb-0">New to here? <Link to="/user-register">Consider Enrolling</Link> or <a href="#">Contacting us</a>.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  