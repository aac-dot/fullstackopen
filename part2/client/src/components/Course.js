import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
    const courseParts = course.parts
    
    return (
        <>
        <Header name={course.name} />
        <Content parts={courseParts} />
        </>
    )
}

export default Course;
  
  
  