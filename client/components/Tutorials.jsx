import React from 'react';

export default class Tutorials extends React.Component {
  render() {
    return (
      <div className="container">
        <input type="text" className="search" placeholder="Click to search tutorials"/>
        <ul className="thumbnails">
          <li>
            <div>
              <h1>JS</h1>
              <h4>making chat</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>Ruby</h1>
              <h4>hello world</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>Python</h1>
              <h4>making sockets</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>C++</h1>
              <h4>SFML platform game</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>Python</h1>
              <h4>mastering arrays</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>Assembler</h1>
              <h4>test lamp</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>Pascal</h1>
              <h4>primitive graphic</h4>
            </div>
          </li>
          <li>
            <div>
              <h1>Type script</h1>
              <h4>meet powerful js</h4>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
