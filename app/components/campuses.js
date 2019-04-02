import React from 'react';
import {connect} from 'react-redux'
import { getAllCampuses, deleteCampusFromDb } from '../reducers';
import { Link} from 'react-router-dom'

class Campuses extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.getAll()
    }

    render(){
        console.log(this.props)
        const campuses = this.props.campuses.map(e => {
          return  <Campus id = {e.id} key={e.id} first = {e.name}  image = {e.imageUrl} deleteCampus={this.props.deleteCampus}></Campus>
        })
        return(
        <div className="container">
            <Link to = '/addCampus'>ADD A CAMPUS</Link>
            <div className="campuses">
                {campuses}
            </div>         
        </div>
        )
    }
} 



const Campus = ({first, image, id, deleteCampus}) => (
    <div className="campus-item">
        <div className="campus-item-inner">
            <Link to={"/campus/" + id} >{first}</Link>
            <div className="campus-img"> 
                <img src={image} alt="txt"></img>
            </div>
            <button onClick={() => {deleteCampus(id)}}>Delete</button>
        </div>
    </div>
)



const mapStateToProps = state => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getAll: () => dispatch(getAllCampuses()),
            deleteCampus: (id) => dispatch(deleteCampusFromDb(id))
            }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses)