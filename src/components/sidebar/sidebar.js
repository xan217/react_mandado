import React from 'react';
import './sidebar.css';

class Sidebar extends React.Component  {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <div className="sidebar">
            <div className="spacer-menu"></div>
            <span className="menu-element">Contratos</span>
            <span className="menu-element">Empleados</span>
            <span className="menu-element">Reportes</span>
            <span className="menu-element">Préstamos</span>
         </div>
      );
   }
}

export default Sidebar;
