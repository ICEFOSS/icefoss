import React, {useState, useEffect, useRef} from "react";
import HomePage from "../Main-page/HomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import hamLogo from "./ham.svg";
import logoClose from "./ham-c.svg";
import styled from "styled-components";
import "./styles.scss";

const Wrapper = styled.div`
  display: block;
  width:40%;
  margin-top: 20px;
  @media (max-width: 470px) {
    margin: 0;
    display: ${props => (props.toggle ? "none" : "static")};
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: ${props => (props.toggle ? "-1000px" : "0px")};
    transition: top 1s;
    .nav-content {
      height: 35%;
      background-color: rgba(50, 13, 136);
    }
  }
`;

const NAVBAR = ({}) => {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("#121930");

  const navigation = useRef();

  const listenScrollEvent = e => {
    if (window.scrollY > 800) {
      setColor("rgba(50, 13, 136)");
    } else {
      setColor("#121930");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    console.log(navigation);
  }, []);

  const handleOutsideCick = (event, ref) => {
    if (!ref.current.contains(event.target)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", e =>
      handleOutsideCick(e, navigation)
    );

    return () => {
      document.removeEventListener("mousedown", e =>
        handleOutsideCick(e, navigation)
      );
    };
  }, []);

  return (
    <Router>
      <nav className="nav_bar" style={{backgroundColor: color}}>
        <Wrapper toggle={toggle}>
          <div className="nav-content" ref={navigation}>
          <ul>
              <li>
                <Link   to={`#home`}>
                  <span className="links">Home </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#faq`}>
                  <span className="links">Dashboard </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#prizes`}>
                  <span className="links">About </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#sponsors`}>
                  <span className="links">Speakers </span>{" "}
                </Link>
              </li>
              <li>
                <Link to={`#team`}>
                  <span className="links">Workshops </span>{" "}
                </Link>
              </li>
              <img
                className="s-close"
                onClick={() => setToggle(true)}
                src={logoClose}
              />
            </ul>
          </div>
          <div className="ease" />
        </Wrapper>
        <img
          className="s-open"
          onClick={() => setToggle(false)}
          src={hamLogo}
        />
      </nav>

      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

function Projects() {
  return <h2>Projects here</h2>;
}

function Contact() {
  return <h2>contact info</h2>;
}

function Links() {
  return <h2>Home</h2>;
}

export default NAVBAR;
