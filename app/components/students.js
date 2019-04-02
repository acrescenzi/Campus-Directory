import React from 'react';
import {connect} from 'react-redux'
import { getAllStudents, deleteStudentFromDb  } from '../reducers';
import { Link} from 'react-router-dom'
import Student from './student'

class Students extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getAll()
    }
       
   
    render(){
        const students = this.props.students.map(e => {
           return <Student key={e.id} first = {e.firstName} last={e.lastName} id={e.id} deleteStudent={this.props.deleteStudent}></Student>
        })
        return(
        <div className="container">
        <Link to = '/addStudent'>ADD A STUDENT</Link>
            <h1>MEET OUR STUDENTS!</h1>
             <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                <tbody>
                   {students}
                </tbody>
            </table>
        </div>
        )
    }
} 



const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => dispatch(getAllStudents()),
        deleteStudent: (id) => dispatch(deleteStudentFromDb(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
