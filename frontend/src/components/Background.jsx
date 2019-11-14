import React from "react";
import "./style/Background.scss";
import BgElement from "./BgElement";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          type: "nuage",
          x: 0,
          y: 1,
          transition: true
        },
        {
          type: "nuage2",
          x: 5,
          y: 3,
          transition: true
        },
        {
          type: "nuage3",
          x: 12,
          y: 1.5,
          transition: true
        },
        {
          type: "nuage4",
          x: 22,
          y: 2.25,
          transition: true
        },
        {
          type: "nuage5",
          x: -10,
          y: 3,
          transition: true
        },
        {
          type: "montagne",
          x: 20,
          y: 2,
          transition: true
        },
        {
          type: "montagne2",
          x: 7,
          y: 2,
          transition: true
        },
        {
          type: "montagne3",
          x: 0,
          y: 2,
          transition: true
        },
        {
          type: "montagne4",
          x: 3,
          y: 2,
          transition: true
        },
        {
          type: "montagne5",
          x: 10,
          y: 2,
          transition: true
        },
        {
          type: "montagne6",
          x: 12,
          y: 2,
          transition: true
        },
        {
          type: "montagne7",
          x: 18,
          y: 2,
          transition: true
        },
        {
          type: "arbre",
          x: 0,
          y: 3.85,
          transition: true
        },
        {
          type: "arbre2",
          x: 0.5,
          y: 4,
          transition: true
        },
        {
          type: "arbre3",
          x: 3,
          y: 3.85,
          transition: true
        },
        {
          type: "arbre4",
          x: 3.5,
          y: 3.85,
          transition: true
        },
        {
          type: "arbre5",
          x: 3.75,
          y: 4,
          transition: true
        },
        {
          type: "arbre6",
          x: 6,
          y: 3.85,
          transition: true
        },
        {
          type: "arbre7",
          x: 9,
          y: 3.85,
          transition: true
        },
        {
          type: "arbre8",
          x: 20,
          y: 4,
          transition: true
        },
        {
          type: "arbre9",
          x: 25,
          y: 4,
          transition: true
        },
        {
          type: "arbre10",
          x: 20,
          y: 4,
          transition: true
        },
        {
          type: "arbre11",
          x: 15,
          y: 4,
          transition: true
        }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.loopElement();
    }, 275);
  }

  loopElement = elements => {
    this.state.elements.map(element => {
      element.x -= 0.5;
      element.transition = true;
      if (element.x <= -20) {
        element.x = 20;
        element.transition = false;
      }
      return null;
    });
    return null;
  };

  render() {
    return (
      <div className="background">
        <ol className="displayElement">
          {this.state.elements.map(element => {
            return (
              <li key={element.type}>
                <BgElement
                  x={element.x}
                  y={element.y}
                  type={element.type}
                  transition={element.transition}
                />
              </li>
            );
          })}
        </ol>
        <div className="sol" />
      </div>
    );
  }
}

export default Background;
