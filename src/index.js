import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function CV(){
  return (<div className="container">
  <img className="profile-image" src="/img/me.jpg" alt="Aamir Nakhwa" />
  <h1>Curriculum Vitae</h1>
  <div className="section">
    <h2>Personal Information</h2>
    <p>Name: Aamir Nakhwa <a href="https://www.linkedin.com/in/aamirnakhwa/" target="_blank">LinkedIn</a></p>
    <p>Email: <a href="mailto:aamirnakhwa@yahoo.com">aamirnakhwa@yahoo.com</a></p>
    <p>Phone: <a href="tel:+923242600619">+923-24-2600619</a></p>
  </div>
  <div className="section">
    <h2>Education</h2>
    <p>Bachelor's Degree in Computer Science</p>
    <p>Ilma University</p>
  </div>
  <div className="section">
    <h2>Experience</h2>
    <p>AVP (Software) - Logicose</p>
    <small>Jan-2023 - Present</small>
  </div>
  <div className="section">
    <h2>Skills</h2>
    <p>HTML5, CSS3, JavaScript, jQeury</p>
    <p>C#, Vb.net, Asp.net, MVC</p>
    <p>SQL, MSSQL, MySQL</p>
    <p>Version Control (Git), GitHub</p>
  </div>
</div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CV />
  </React.StrictMode>
);