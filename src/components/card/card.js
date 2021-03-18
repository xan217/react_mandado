import React from 'react';
import './card.css';

class Card extends React.Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <div className="card">
            <img src="https://trendsandmanagement.com/wp-content/uploads/2020/10/trust_vs_forest.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
               <div className="card-title-container block-container">
                  <h5 className="card-title">Card title</h5>
               </div>
               <div className="card-content-container block-container">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <span className="btn btn-primary">Go somewhere</span>
               </div>
               <div className="card-footer-container block-container">
               </div>
            </div>
         </div>
      );
   }
}

export default Card;
 

