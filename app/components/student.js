import React from 'react'
import {Link} from 'react-router-dom'
const Student = ({first,last, id, deleteStudent}) => (
    <tr>
        <td> <Link to = {'/student/' + id} >{first}</Link></td> 
        <td>{last}</td>
        <td>
            <button onClick={() => {deleteStudent(id)}}>X</button>
        </td>
    </tr>
)

export default Student