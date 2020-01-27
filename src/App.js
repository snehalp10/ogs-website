import React from "react";
import "./App.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideNav
          onSelect={selected => {
            const to = "/" + selected;
            // if (location.pathname !== to) {
            //   history.push(to);
            // }
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i className="home" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="about">
              <NavIcon>
                <i className="about" style={{ fontSize: "1.75em" }} />
              </NavIcon>
              <NavText>About</NavText>
              <NavItem eventKey="about/members">
                <NavText>Members</NavText>
              </NavItem>
              <NavItem eventKey="about/contact">
                <NavText>Contact Us</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </header>
    </div>
  );
}

export default App;
