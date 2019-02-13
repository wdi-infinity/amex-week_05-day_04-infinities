import React from "react";
// import Interest from "./interest";

class Infinity extends React.Component {
  render() {
    const interests = this.props.personData.interests.map(interest => <li>{interest}</li>)

    return (
      <div>
        <h1>{this.props.personData.name[0]} {this.props.personData.name[1]}</h1>
        <h2>{this.props.personData.age}</h2>
        <h2>{this.props.personData.hometown}</h2>
        <ul>{interests}</ul>
      </div>

    );
  }
}

export default Infinity;