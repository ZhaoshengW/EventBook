import React from 'react';

const HomePage = ({history}) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img className="ui image massive" src="/assets/logo.png" alt="logo" />
            <div className="content">EventBook</div>
          </h1>
          <h2>Do whatever you want to do</h2>
          <div onClick={() => history.push('/events')} className="ui huge white inverted button">
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        EventBook &copy; 2018. All copy rights reserved!
      </div>
    </div>
  );
};

export default HomePage;
