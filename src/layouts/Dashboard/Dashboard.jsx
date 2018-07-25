/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

// import dashboardRoutes from "routes/dashboard.jsx";
import getDashboardRoutes from "routes/dashboard.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import {connect} from "react-redux";

// import EmailVerification from "views/EmailVerification/EmailVerification.jsx";

const switchRoutes = isUser => (
  <Switch>
    {getDashboardRoutes(isUser).map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  state = {
    mobileOpen: false
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if(this.state.mobileOpen){
        this.setState({mobileOpen: false});
      }
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          // routes={dashboardRoutes}
            routes={getDashboardRoutes(this.props.isUser)}
          logoText={"HOME EXPENSES"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            // routes={dashboardRoutes}
            routes={
              getDashboardRoutes(this.props.isUser)
                  // .filter(route => route.component !== EmailVerification)//todo
            }
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes(this.props.isUser)}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes(this.props.isUser)}</div>
          )}
          {this.getRoute() ? <Footer
              // routes={dashboardRoutes}
              routes={getDashboardRoutes(this.props.isUser)}
          /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
    isUser: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isUser: state.mainReducer.isUser
})

const mapDispatchToProps = {
}

//привязаться к стору получить isUser
// export default withStyles(dashboardStyle)(App);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dashboardStyle)(App))
