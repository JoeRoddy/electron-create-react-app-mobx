import React, { Component } from "react";
import { observer } from "mobx-react";
import wordStore from "../stores/WordStore";

@observer
class WordChanger extends Component {
  state = {
    inputVal: ""
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">Hello Electron!</p>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={e => this.setState({ inputVal: e.target.value })}
        />{" "}
        <br />
        <button
          onClick={e => {
            wordStore.changeWordTo(this.state.inputVal);
            this.setState({ inputVal: "" });
          }}
        >
          Change word
        </button>
        <h2>Current word: {wordStore.currentWord}</h2>
      </div>
    );
  }
}

export default WordChanger;
