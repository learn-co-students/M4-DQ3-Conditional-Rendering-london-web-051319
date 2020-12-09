import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {

  constructor () {
    super()
    this.state = {
      selected: Profile
    }
  }

  changeSelection = selection => {
    this.setState({
      selected: selection
    })
  }

  render () {

    let detailsToDisplay

    switch (this.state.selected){
      case "Profile":
        detailsToDisplay  = <Profile />
        break;
      case "Photo":
        detailsToDisplay  = <Photos />
        break;
      case "Cocktail":
        detailsToDisplay  = <Cocktails />
        break;
      case "Pokemon":
        detailsToDisplay  = <Pokemon />
        break;
      default:
        detailsToDisplay = <Profile />
        break;
    }

    return (
      <div>
        <MenuBar changeSelection={this.changeSelection} selection={this.state.selected}/>
        {detailsToDisplay}
      </div>
    )
  }
}

export default MainBox
