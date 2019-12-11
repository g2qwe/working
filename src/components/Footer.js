import React from 'react';
import './Footer.css';


class Footer extends React.Component {


  render() {
  return (
    <div>
    <span className =""><strong>1</strong> items left</span>
    <ul className="filters">
      <li>
        <a href="#/" ></a>
      </li>
      <li>
        <a href="#/active" className="">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button className="clear-completed">Clear completed</button>
  </div>
    );
}
  }




export default Footer;