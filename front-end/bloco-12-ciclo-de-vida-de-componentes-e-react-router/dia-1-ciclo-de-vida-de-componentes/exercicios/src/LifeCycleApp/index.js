import React, { Component } from "react";

import Connections from "./Connections";
import Profile from "./Profile";

import './style.css';

class LifeCicleApp extends Component {
  constructor() {
    super();

    this.changeProfile = this.changeProfile.bind(this);

    this.state = {
      showProfile: false
    }
  }

  componentDidMount() {
    this.changeProfile();
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { showProfile } = this.state;
    return (
      <>
        <h1>LifeCicleApp</h1>
        <div className="gitNetwork d-flex flex-column justify-content-center">
          { showProfile ? <Profile /> : null }
          <div className="central d-flex justify-content-center">
            <button
              className="btn btn-dark align-self-center"
              type="button"
              onClick={ this.changeProfile }
            >
              { showProfile ? 'Ocultar Perfil' : 'Mostrar Perfil' }
            </button>
          </div>
          <Connections />
        </div>
      </>
    );
  }
}

export default LifeCicleApp;
