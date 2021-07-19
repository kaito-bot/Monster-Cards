import React, { Component } from "react";
import { SearchBox } from "./components/searchBox/searchbox.component";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    //toFilterMonsters
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //clickCardHandler
    const handleClickCard = () => {
      return console.log("card is clicked having id");
    };

    //clickHandler for searchBox
    const handleClick = (e) => this.setState({ searchField: e.target.value });

    return (
      <div>
        <SearchBox placeHolder="Search the monster" handleClick={handleClick} />
        <CardList
          monster={filteredMonsters}
          handleClickCard={handleClickCard}
        />
      </div>
    );
  }
}
export default App;
