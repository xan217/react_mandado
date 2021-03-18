import React from 'react';
import './navbar.css';

class Navbar extends React.Component  {
   constructor(props) {
      super(props);
      this.state = {}
   }
   toggleSidebar(){
      
   }
   render() {
      return (
         <div className="navbar bg-nav">
            <span className="nav-button" onClick={() => this.toggleSidebar()}>
               <i className="mdi mdi-menu" aria-hidden="true"></i>
            </span>
            <img src="./assets/img/logo.PNG" alt="" className="nav-logo"/>
            <div className="buttons">
               <button href="#" className="nav-button notificationsButton">
                  <i className="mdi mdi-bell" aria-hidden="true"></i>
               </button>
               <button href="#" className="nav-button userButton">
                  <i className="mdi mdi-account-circle-outline" aria-hidden="true"></i>
               </button>
            </div>
         </div>
      );
   }
}

export default Navbar;
