import React, {Component} from "react";

import Aux from "../../hoc/Aux";
import Toolbar from "../UI/Toolbar/Toolbar";
import SideDrawer from "../UI/SideDrawer/SideDrawer";
import Backdrop from "../UI/Toolbar/Backdrop/Backdrop";

class Layout extends Component {
  state = {
    sideDrawerOpen: true,
  };
  toggleToggler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Aux>
        <Toolbar toggle={this.toggleToggler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </Aux>
    );
  }
}

export default Layout;
