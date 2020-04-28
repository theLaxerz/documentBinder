// Call to React and to Sidenav's CSS
import React from 'react';
import './sidenv.scss';
import CornonaCompnent from '../coronadata/corona_api';

function sideNav() {
    return (
      // Divided in Main DIV 100% of Screen with SideNav DIV 20% Of Screen
      // Hoping to get Content to be 70% with padding around it to give it a splash
      // of color around the Content.
      // Added SuperDIV as an attempt to split out the main div without throwing
      // REACT TSX Error
      <div className = "SuperDIV">  
        <div className = "Main">
          {/* Sidenav Structure, Main Component with Buttons */}
          <div className = "Side-Nav">
          <a href='https://material-ui.com'>
            <button className = "Button">Material-UI</button>
          </a>  
          </div>    
          <div className = "Side-Nav">
          <a href='https://reactjs.com'>
            <button className = "Button">ReactJS</button>
          </a>  
          </div>    
          <div className = "Side-Nav">
          <a href='https://www.tensorflow.org/'>
            <button className = "Button">TensorFlow</button>
          </a>  
          </div>    
          <div className = "Side-Nav">
          <a href='https://thelaxerz.info'>
            <button className = "Button">theLaxerz</button>
          </a>  
          </div>              
        </div>
        {/* Attempt to put Content in the same JS file as NAV Bar */}
        <div className="Content">
          <CornonaList />
        </div>
      </div>  
    );
}
export default sideNav