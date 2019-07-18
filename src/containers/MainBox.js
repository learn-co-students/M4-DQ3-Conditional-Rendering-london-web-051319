import React from 'react';
import MenuBar from '../components/MenuBar.js';
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js';

class MainBox extends React.Component {

  constructor() {
    super();
    this.state = {
      detailsToDisplay: <Profile />,
    };
  }

  render() {

    const menuControls = {
      showProfile: () => {
        this.setState({ detailsToDisplay: <Profile /> });
        this.activeBtn = 'profile';
      },

      showPhotos: () => {
        this.setState({ detailsToDisplay: <Photos /> });
        this.activeBtn = 'photos';
      },

      showCocktails: () => {
        this.setState({ detailsToDisplay: <Cocktails /> });
      },

      showPokemon: () => {
        this.setState({ detailsToDisplay: <Pokemon /> });
      },

      activeBtn: 'profile',
    };

    const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar menuControls={menuControls} />
        {this.state.detailsToDisplay}
      </div>
    );
  }

}

export default MainBox;
