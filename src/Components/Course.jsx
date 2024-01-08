import React from 'react';
 
const Course = ({ title, description }) => {
  const courseStyle = {
    width: '270px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#f6edfa',
  };

  const courseInfoStyle = {
    textAlign: 'left',
    marginTop: '15px',
  };

  const titleStyle = {
    color: '#8e44ad',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    color: '#8e44ad',
  };

  const buttonStyle = {
    backgroundColor: '#e1a2fa',
    color: '#470363',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out', // Added transition for smoother color change
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 0 20px rgba(167, 53, 212, 0.2)',
    backgroundColor:'#f8edfc'
  };

  const hoverButtonStyle = {
    backgroundColor: '#e1a2fa',  // Dark purple color
   
  };

  return (
    <div id="maindiv" style={{ ...courseStyle, ...hoverStyle }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEcG8_yGBpUtBuoUlom5JxqsBphzsTGTF_w&usqp=CAU" alt="Course Thumbnail" />
      <div style={courseInfoStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        <button style={{ ...buttonStyle, ...hoverButtonStyle }} >Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
