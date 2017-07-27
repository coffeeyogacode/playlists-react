import React, { Component } from "react";
import PlayListItem from "./PlayListItem";

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }
  fetchData = e => {
    e.preventDefault();
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ songs: data });
        console.log("HERE");
      });
  };
  componentWillMount() {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
      .then(results => {
        return results.json();
      })
      .then(data => {
        const songs = data;
        this.setState({ songs: data });
        console.log("state", this.state.songs);
        console.log(songs);
      });
  }
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.fetchData}>
          Update List
        </button>
        <PlayListItem songs={this.state.songs} />
      </div>
    );
  }
}

export default PlayList;
