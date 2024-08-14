import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
  const [selectCourses, setSelectCourses] = useState([]);
  const [creditHour, SetCreditHour] = useState(0);
  const [totalCoursePrice, setTotalCoursePrice] = useState(0);
  const [showToast, setShowToast] = useState(false);

  
  
  

  const handleSelectCourse = (course) => {
    const newSelectCourse = [...selectCourses, course];
    setSelectCourses(newSelectCourse);
    console.log(selectCourses);
    handleAllSelectedCourse(course);

  }

  const handleAllSelectedCourse = (course) => {
    //console.log(course.id);
    // console.log(course.course_credit);
    const selectCreditHour = course.course_credit;
    const newCreditHour =  creditHour + selectCreditHour;
    SetCreditHour(newCreditHour);
    //console.log(newCreditHour);

    //////
    const selectCoursePrice = course.course_price;

    console.log("price",selectCoursePrice);

    const newTotalCoursePrice = totalCoursePrice + selectCoursePrice;

    console.log("second", newTotalCoursePrice);
    
    setTotalCoursePrice(newTotalCoursePrice);
    //console.log(newTotalCoursePrice);


  }
 

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Courses handleSelectCourse = {handleSelectCourse} creditHour = {creditHour} ></Courses>
      
        <Cart selectCourses = {selectCourses} creditHour = {creditHour} totalCoursePrice = {totalCoursePrice} >

        </Cart>
      </div>
      
        
    </>
  )
}

export default App
