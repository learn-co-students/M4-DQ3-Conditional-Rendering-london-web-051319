import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedOption: ""
    }
  }

  changeSelectedOption = (id) => {
    // let menuOption = id.charAt(0).toUpperCase().splice(1)
    this.setState({
      selectedOption: id
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay;

    switch (this.state.selectedOption){
      case "Profile":
        detailsToDisplay = <Profile />
        break
      case "Cocktail":
        detailsToDisplay = <Cocktails />
        break
      case "Photo":
        detailsToDisplay = <Photos />
        break
      case "Pokemon":
        detailsToDisplay = <Pokemon />
        break
    }

    return (
      

      <div>
        <MenuBar changeSelectedOption={this.changeSelectedOption}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
