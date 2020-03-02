import React from "react";

class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "*",
      name: "You Name",
      thru: "MM/YY"
    };
  }

  changedNumber = () => {
    let nbr = document.getElementById("number").value;
    if (!/^\d+$/.test(nbr)) {
      alert(
        "Il faut entrer une valeur numérique dans la valeur de numero de la carte"
      );
      nbr = "0000000000000000";
      document.getElementById("number").value = null;
    }
    this.setState({
      number: nbr
    });
  };

  changedName = () => {
    let namee = document.getElementById("name").value;
    if (/\d+$/.test(namee)) {
      alert("Il faut entrer une chaine alphabetique");
      namee = "";
      document.getElementById("name").value = null;
    }
    this.setState({
      name: namee
    });
  };

  changedThru = () => {
    let ch = document.getElementById("thru").value;
    let thruy = ch.substr(3);
    let thrum = ch.substr(0, 2);
    if (ch.length > 2) {
      document.getElementById("thru").value = thrum + "/" + thruy;
    }
    if (!/^\d+$/.test(thrum)) {
      document.getElementById("thru").value = ch.substr(0, ch.length - 1);
      thrum = "";
      alert("Date sous forme MM/YY");
    }
    if (thruy && !/^\d+$/.test(thruy)) {
      document.getElementById("thru").value = ch.substr(0, ch.length - 1);
      thruy = "";
      alert("Date sous forme MM/YY");
    }
    if (thrum > 12 || thrum === 0) {
      alert("verifier le valeur de moins entre 1 et 12");
      document.getElementById("thru").value = null;
      thrum = "";
    }
    if (ch.length === 5 && thruy < 20) {
      alert("verifier le valeur d'annee >20");
      document.getElementById("thru").value = null;
      thruy = "";
      thrum = "";
    }
    this.setState({
      thru: thrum.padStart(2, "0") + "/" + thruy.padStart(2, "0")
    });
  };

  render() {
    return (
      <div className="container">
        <div className="cadre">
          <img
            id="puce"
            alt="puce"
            src="https://img.icons8.com/officel/2x/sim-card-chip.png"
          ></img>
          <h1>Go My Code</h1>
          <strong>
            <p id="numberC">
              {String(this.state.number)
                .replace(/[^\dA-Z]/g, "")
                .trim()
                .padEnd(16, "*")
                .replace(/(.{4})/g, "$1 ")}
            </p>
          </strong>
          <strong>
            <p id="thruC">{String(this.state.thru)}</p>
          </strong>
          <strong>
            <h2 id="nameC">{String(this.state.name.toUpperCase())}</h2>
          </strong>
          <img
            id="master"
            alt="master"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
          ></img>
        </div>
        <div className="form">
          <form>
            <input
              className="input"
              type="text"
              id="number"
              name="cardNumber"
              placeholder="**** **** **** ****"
              onInput={this.changedNumber}
              maxLength="16"
            />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              maxLength="20"
              placeholder="Name"
              onInput={this.changedName}
            />
            <input
              className="input"
              type="text"
              id="thru"
              name="thru"
              placeholder="MM/YY"
              onInput={this.changedThru}
              maxLength="5"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Comp;
