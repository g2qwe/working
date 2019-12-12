import React from 'react';
//import './Footer.css';



class Footer extends React.Component {


  render() {
  return (
    <div>
    
    <ul className="filter">
      <li>
        <a href="#/all">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
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