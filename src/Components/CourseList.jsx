// CourseList.js
import React from 'react';
import Course from './Course';
const CourseList = ({ courses }) => {
  const courseListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '', // Light Purple Theme Color
  };

  const headingStyle = {
    color: '#8e44ad', // Darker Purple for Heading
  };

  const courseContainerStyle = {
    marginLeft: '5px',
    marginBottom: '20px', // Proper margin between each course
  };
  const paragraphAnimation = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    animation: 'typing 3s steps(30, end) infinite',
  };
 

  return (<>
   <div style={{
    color: '#8e44ad',  // Light purple color
    fontSize: '24px',  // Font size
    textAlign: 'center',  // Center-align text
    marginTop: '20px',  // Top margin
  }}>
      <h3>Featured Courses</h3>
      <p style={paragraphAnimation}>Unlock your potential with our enriching courses for a brighter future!</p>
  </div>
    <div style={courseListStyle}>
      
      {courses.map(course => (
        <div key={course.id} style={courseContainerStyle}>
          <Course title={course.title} description={course.description} />
        </div>
      ))}
    </div>
  </>
    
  );
};

export default CourseList;
