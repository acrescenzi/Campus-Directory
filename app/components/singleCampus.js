import React from 'react'
import {connect} from 'react-redux'
import Student from './student'


export class SingleCampus extends React.Component {
    constructor(){
        super()
    }
    render(){
        const campusId = Number(this.props.match.params.id)
        const campus = this.props.campuses[campusId - 1]
        const students = campus.Students.map(e => {
            return <Student key={e.id} first = {e.firstName} last={e.lastName} id={e.id} deleteStudent={this.props.deleteStudent}></Student>
        })
        console.log(campus.Students[0])
            return(
            <div className="container">
                <h1>CAMPUS</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Campus Name</th>
                                <th>Location</th>
                                <th> </th>
                                <th>Description</th>
                                <th>StudentsTest</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {campus.name}
                                </td>
                                <td>
                                    {campus.address}
                                </td>
                                <td>
                                    <img src={campus.imageUrl} alt="txt"></img>
                                </td>
                                <td>
                                    {campus.description}
                                </td>
                                <td>
                                    
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    {students}
            </div>
        )
    }
        
}





const mapStateToProps = state => {
    return {
        campuses: state.campuses
    }
}


export default connect(mapStateToProps)(SingleCampus)

