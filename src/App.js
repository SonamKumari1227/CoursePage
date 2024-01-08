// App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import CourseList from './Components/CourseList';
import Footer from './Components/Footer';

const defaultCourses = [
  { id: 1, title: 'Course Title 1', description: 'Learn the fundamentals of React.js' },
  { id: 2, title: 'Course Title 2', description: 'Advanced CSS techniques ' },
  { id: 3, title: 'Course Title 3', description: 'Introduction to JavaScript' },
  { id: 4, title: 'Course Title 4', description: 'Web Development with HTML- CSS' },
  { id: 5, title: 'Course Title 5', description: 'Database Management with SQL' },
  { id: 6, title: 'Course Title 6', description: 'Python Programming for Beginners' },
  { id: 7, title: 'Course Title 7', description: 'Data Analysis using Pandas' },
  { id: 8, title: 'Course Title 8', description: 'Building RESTful APIs with Node.js' },
  
];

  
  
  function App() {
  return (
    <div className="App">
      <Header />
      <CourseList courses={defaultCourses} />
      <Footer />
    </div>
  );
}

export default App;

