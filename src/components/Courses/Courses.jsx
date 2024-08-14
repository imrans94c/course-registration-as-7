import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';


const Courses = ({handleSelectCourse, creditHour}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
       const fetchCoursesData = async () => {
            const URL = 'data.json';
            try {
                const res = await fetch(URL);
                const data = await res.json();
                //console.log(data);
                setCourses(data);
            } catch (error) {
                console.log('No data found', error);
            }
       }
       fetchCoursesData();
    },[])

    return (
        <>   
        <div className = "grid grid-cols-3 w-9/12">
            {
                courses.map(course => <Course key ={course.id} course={course} handleSelectCourse = {handleSelectCourse} creditHour = {creditHour}
                     ></Course>)
            }
        </div>
        </>
            
    );
};

Courses.propType = {
    handleSelectCourse : PropTypes.func.isRequired,
    creditHour : PropTypes.number.isRequired
}

export default Courses;