import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MyButton from '../MyButton';

const Home = () => {
  return (
      <MainLayout>
        <div className="mt-4 p-5 bg-dark text-white rounded">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum...</p>
      </div>
      <MyButton text="Test "color="danger"/>
      <MyButton text="Next"color="light"/>
      <MyButton text="Information "color="primary"/>
      <MyButton text="Primary "color="success"/>
      <MyButton text="Primary "color="info"/>
      <MyButton text="Primary "color="warning"/>
      <MyButton text="Fon "color="dark"/>
      </MainLayout>
  );
};

export default Home