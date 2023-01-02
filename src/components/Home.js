import React from 'react';

const Home = ({ username }) => {
    return (
      <>
      <h3>Welcome to Stranger Things!</h3>  
      {username && <h5>Hello {username}, you are logged now in!</h5>}
      </>
    );
}

export default Home; 