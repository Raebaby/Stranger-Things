import React from 'react';

const Home = ({ guest }) => {
    return (
      <>
      <h3>Welcome to Stranger Things!</h3>  
      {guest && <h5>{guest}, you are logged now in</h5>}
      </>
    );
}

export default Home; 