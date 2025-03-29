import React from 'react';
import Button from '../../components/common/Button/Button';

const Home: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
};

export default Home;