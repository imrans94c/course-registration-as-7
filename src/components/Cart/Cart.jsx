import { useState } from "react";
import SelectCart from "./SelectCart";
import PropTypes from 'prop-types';



const Cart = ({selectCourses, creditHour, totalCoursePrice}) => {

    const [yourHours] = useState(20);
    return (
        <div className="text-left bg-slate-100 p-4 rounded-xl mt-4 w-64">
            {/* {creditHour >= 20 ? "your credit is finished" :  
            creditHour < 0 ? "credit negative not Possible" :
            20 - {creditHour}} */}
            <h1 className="font-bold text-lg text-[#2F80ED]">Credit Hour Remaining : {
                  
                  yourHours > creditHour ?  yourHours - creditHour : 
                  creditHour == yourHours ? "your credit is 0":
                  ((yourHours - creditHour)  > creditHour) ? "your credit is finished" :
                  `you need${ yourHours - creditHour} credit or remove this course ` 


           } hr</h1>
            <hr className="h-px bg-slate-500 my-4" />
            <h1 className="font-bold text-xl text-black">Course Name</h1>
            {/* <h1>{ArrayOfIndex(selectCourses)}</h1> */}
             {
                selectCourses.map((selectCourse, index) => <SelectCart key = {selectCourse.id} selectCourse = {selectCourse} index = {index} ></SelectCart>)
             }
            <hr className="h-px bg-slate-500 my-4" />

             <h1>Total Credit Hour: {
                creditHour <= 20 ? creditHour : 
                creditHour > 20 ? `${creditHour} you can not purchase`
                : creditHour
             }</h1>
             <hr className="h-px bg-slate-500 my-4" />
             
                <h1 className="font-semibold">Total Price : {
                    Math.round((totalCoursePrice + Number.EPSILON) * 100) / 100} USD</h1>   
        </div>
    );
};

Cart.propTypes = {
    selectCourses : PropTypes.array.isRequired,
    creditHour : PropTypes.number.isRequired,
    totalCoursePrice: PropTypes.number.isRequired,
} 

export default Cart;
