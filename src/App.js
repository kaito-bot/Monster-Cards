import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Shukaku",
        },
        {
          id: 2,
          name: "Matatabi",
        },
        {
          id: 3,
          name: " Isobu",
        },
        {
          id: 4,
          name: "Son Goku",
        },
        {
          id: 5,
          name: " Kokuo",
        },
        {
          id: 6,
          name: "Saiken",
        },
        {
          id: 7,
          name: "Chomei",
        },
        {
          id: 8,
          name: "Gyuki",
        },
        {
          id: 9,
          name: "Kurama",
        },
        {
          id: 10,
          name: "Juubi",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
export default App;
