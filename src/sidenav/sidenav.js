import React from 'react';
import './sidenav.scss';

function sideNav() {
    return ( 
        <div className = "Main">    
          <div className = "Side-Nav">
          <a href='https://google.com'>
            <button className = "Button">Google</button>
          </a>  
          </div>    
          <div className = "Side-Nav">
          <a href='https://twitter.com'>
            <button className = "Button">Twitter</button>
          </a>  
          </div>    
          <div className = "Side-Nav">
          <a href='https://linkedin.com'>
            <button className = "Button">LinedIn</button>
          </a>  
          </div>    
          <div className = "About Me">
          <a href='https://thelaxerz.info'>
            <button className = "Button">theLaxerz</button>
          </a>  
          </div>              
        </div>
        
    );
}
export default sideNav