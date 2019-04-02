import {combineReducers} from 'redux'
import axios from 'axios'

const initialState = {
  students: [],
  campuses:[]
}

export const ADD_CAMPUS = 'ADD_CAMPUS'
export const ADD_STUDENT = 'ADD_STUDENT'
export const REMOVE_CAMPUS = 'REMOVE_CAMPUS'
export const REMOVE_STUDENT = 'REMOVE_STUDENT'
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
export const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES'


export const getAllStudents = () => async (dispatch) => {
  const students = await axios.get('api/students')
  dispatch(addAllStudents(students.data))
}

export const getAllCampuses = () => async (dispatch) => {
  const campuses = await axios.get("api/campuses")
  dispatch(addAllCampuses(campuses.data))  
}


// //function createCampus(loyola){
//   return function(dispatch){
//     const campusToAdd = await axios.post('api/campuses/new', campus)
//   if(campusToAdd.status === 200){
//     dispatch(addCampus(campus))
//   }
//   }
// }

export const createCampus = (campus) => async (dispatch) => {
  const campusToAdd = await axios.post('api/campuses/new', campus)
  if(campusToAdd.status === 200){
    dispatch(addCampus(campus))
  }
}

export const deleteCampusFromDb = (id) => async (dispatch) => {
  const campusToRemove = await axios.delete("api/campuses/" + id)
  if(campusToRemove.status === 200){
    dispatch(removeCampus(id))
  }
}

export const deleteStudentFromDb = (id) => async (dispatch) => {
  const studentToRemove = await axios.delete("api/students/" + id)
  if(studentToRemove.status === 200){
    dispatch(removeStudent(id))
  }
}


const removeCampus = (campusId) => {
  return ({type:REMOVE_CAMPUS, campusId})
}

const removeStudent = (studentId) => {
  return ({type:REMOVE_STUDENT, studentId})
}

const addAllStudents = (students) => {
  return ({type:GET_ALL_STUDENTS, students})
}

const addAllCampuses = (campuses) => {
  return ({type:GET_ALL_CAMPUSES, campuses})
}

const addCampus = (campus) => {
  return ({type:ADD_CAMPUS, campus})
}
//this is a fucntion that returns an object with a type, and payload



const addStudent = (student) => {
  return ({type:ADD_STUDENT, student})
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return {...state, campuses: action.campuses}
    case GET_ALL_STUDENTS:
      return {...state, students: action.students}
    case REMOVE_CAMPUS:
      let newCampusList = state.campuses.slice().splice(action.campusId)
      return {...state, campuses: newCampusList}
    case REMOVE_STUDENT:
      let studentPos = state.students.findIndex((e) => e.id === action.studentId)
      let newStudentList = state.students.slice()
      newStudentList.splice(studentPos, 1)
      return {...state, students: newStudentList}
    case ADD_CAMPUS:
      return {...state, campuses: [...campuses, action.campus]}
    default:
      return state
  }
}


export default rootReducer
