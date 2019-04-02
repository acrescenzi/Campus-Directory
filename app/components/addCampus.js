import React from 'react';
import {connect} from 'react-redux'
import {createCampus} from '../reducers'

class AddCampus extends React.Component {
    constructor(props){
        super(props)
        this.handleName = this.handleName.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleImageUrl = this.handleImageUrl.bind(this)
        this.state = {
            name: '',
            address: '',
            imageUrl: ''
        }
    }

    handleName(e){
        this.setState({name: e.target.value})
    }

    handleAddress(e){
        this.setState({address: e.target.value})
    }

    handleImageUrl(e){
        this.setState({imageUrl: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const campus = this.state;
        this.props.add(campus);
        alert("working")
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h3>Add Campus Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.props.name} onChange={this.handleName} />
                    </label>
                    <label>
                        Address:
                        <input type="text" value={this.props.address} onChange={this.handleAddress} />
                    </label>
                    <label>
                        ImageUrl:
                        <input type="text" value={this.props.imageUrl} onChange={this.handleImageUrl} />
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

const mapDispatchToProps = (dispatch) => {
    return {add: (campus) => dispatch(createCampus(campus))}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)