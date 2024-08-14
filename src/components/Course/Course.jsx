import PropTypes from 'prop-types';

const Course = ({course, handleSelectCourse}) => {
    const {course_name, course_details, course_price, course_img, course_credit} = course;
    return (
     
            
            <div className=" items-center bg-slate-100 p-4 w-72 my-4 rounded-xl ">
                <img className="w-64 h-44 rounded-xl" src={course_img} alt="" />

                <div className="text-left w-64 h-36">
                    <h1 className="font-semibold text-lg my-4">{course_name}</h1>
                    <p className="text-gray-400 font-normal text-sm h-16 ">{course_details}</p>
                    <p className="h-10">
                        <span className="text-2xl">$</span> 
                        <span className="text-base text-gray-400 mx-2">Price : {course_price}</span>
                        <span className="mx-2"><i className="fa-solid fa-book-open"></i></span>
                        <span className="text-gray-400">Credit : {course_credit} hr</span>
                    </p>
                 </div>
                 {/* handleSelectCourse(course); */}
                <button onClick={() =>
                   handleSelectCourse(course)} className="btn bg-[#2F80ED] w-64 h-10 font-semibold text-base text-white">Select</button>
                   {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
                <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                </dialog>

            </div>
       
    );
};

Course.propTypes = {
    course : PropTypes.object.isRequired,
    handleSelectCourse : PropTypes.object.isRequired


}

export default Course;