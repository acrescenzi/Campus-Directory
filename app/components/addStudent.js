import React from 'react';
import {connect} from 'react-redux'

class AddStudent extends React.Component {
    constructor(props){
        super(props)
    }
    handlefirstNameChange(e){
        this.setState({firstName: e.target.value})
    }

    handlelastNameChange(e){
        this.setState({lastName: e.target.value})
    }

    handleemailChange(e){
        this.setState({email: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const student = this.props.students; 
        this.props.addNewStudent(student);
        this.setState({})

    }

    render(){
        return(
            <div>
                <h3>Add Student Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        fistName:
                        <input type="text" value={this.props.firstName} onChange={this.handlefirstNameChange} />
                    </label>
                    <label>
                        lastName:
                        <input type="text" value={this.props.lastName} onChange={this.handlelastNameChange} />
                    </label>
                    <label>
                        email:
                        <input type="text" value={this.props.email} onChange={this.handleemailChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
          
        )
    }
        
    
}

const mapStateToProps = state => {
    return {
       
    }
}

export default connect(mapStateToProps)(AddStudent)