import React from 'react';
import ListElement from './ListElement.jsx';

const List = (props) => {
  return (
    <div>
      {props.students.map(student => (
        <ListElement key={student._id} student={student} getStudents={props.getStudents}/>
      ))}
    </div>
  );
}


export default List;