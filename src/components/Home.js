import React from 'react';

const Home = ({ username }) => {
    return (
      <>
      <div className='page'> 
        <div className='greeting'>{username && <h2>Hello {username}, you are logged now in!</h2>}</div>
      </div>
      <div className='logo'>
        <div className="st">
          <div className="st-top">
            <div className="st-bound st-bound-full"></div>
                <p>
                  <span className="st-drop st-stranger-s">S</span>
                  <span className="st-stranger-t">t</span>
                  <span className="st-stranger-r">r</span>
                  <span className="st-stranger-a">a</span>
                  <span className="st-stranger-n">n</span>
                  <span className="st-stranger-g">g</span>
                  <span className="st-stranger-e">e</span>
                  <span className="st-drop st-stranger-r-2">r</span>
                </p>
            <div className="st-bound st-bound-mini st-bound-left"></div>
            <div className="st-bound st-bound-mini st-bound-right"></div>
          </div>
            <div className="st-bottom">
                <p>
                  <span className="st-things-t">T</span>
                  <span className="st-things-h">h</span>
                  <span className="st-things-i">i</span>
                  <span className="st-things-n">n</span>
                  <span className="st-things-g">g</span>
                  <span className="st-things-s">s</span>
                </p>
            </div>
        </div>
      </div>
      </>
    );
}

export default Home; 