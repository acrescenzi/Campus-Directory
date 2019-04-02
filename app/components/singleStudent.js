import React from 'react'
import {connect} from 'react-redux'



class SingleStudent extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.students)
        const studentId = Number(this.props.match.params.id)
        const student = this.props.students[studentId - 1]
        return(
            <div className="container">
                <h1>STUDENT</h1>
                    <table>
                        <thead>
                            <tr> 
                                <th>First</th>
                                <th>Last</th>
                                <th>Email</th>
                                <th>Image</th>
                                <th>Gpa</th>
                                <th>Campus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {student.firstName}
                                </td>
                                <td>
                                    {student.lastName}
                                </td>
                                <td>
                                    {student.email}
                                </td>
                                <td>
                                    <img src={student.imageUrl} alt="txt"></img>
                                </td>
                                <td>
                                    {student.gpa}
                                </td>
                            </tr>

                        </tbody>
                    </table>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps)(SingleStudent)




