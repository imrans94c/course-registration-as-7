import PropTypes from 'prop-types';

const SelectCart = ({selectCourse, index}) => {

    const {course_name} = selectCourse; 
    
 

    
    return (
        <>
        <div>
            
            <h1 className="text-base text-gray-400">{index + 1} {course_name}</h1>

            
        </div>
        </>
    );
};

SelectCart.propTypes = {
    selectCourse : PropTypes.object.isRequired,
    index : PropTypes.array.isRequired
}

export default SelectCart;