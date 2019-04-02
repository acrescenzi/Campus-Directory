
const {db} = require('./server/db')
const {green, red} = require('chalk')
const Campuses = require('./server/db/models/campuses')
const Students = require('./server/db/models/students')




  const campuses = [{
    name: 'Loyola',
    imageUrl: 'https://amp.businessinsider.com/images/5628f8589dd7cc11008c3e31-750-562.jpg',
    address: 'Poughkeepsie, Ny',
    description: 'The liberal-arts college has a student body under 2,500, but it still managed to rank No. 4 in the Reviews Best College Library list',

  }, {
    name: 'Georgetown Unviersity ',
    imageUrl: 'https://amp.businessinsider.com/images/5629307cbd86ef15008c3f0b-750-563.jpg',
    address: 'Bar Harbor, MA',
    description: 'With all 350 students sharing one major, the College of the Atlantic is deeply focused on community. The school earned top rankings this year for Best Campus Food and Great Financial Aid.'
  }, {
    name: 'College of the Atlantis',
    imageUrl: 'https://amp.businessinsider.com/images/562930c1bd86ef185c8b8e8b-1536-1152.jpg',
    address: 'Princeton, NJ',
    description: 'The university is just 20 minutes from the French Quarter, and ranked No. 2 this year in the Best Town-Gown Relations ranking — a measure of how well the academic and non-academic communities get along.'
  }, {
    name: 'Boston College ',
    imageUrl: 'https://amp.businessinsider.com/images/5628fd3fbd86ef185c8b8c8b-1136-852.jpg',
    address: 'Chestnut Hill, MA',
    description: '500-acre campus , includes a site on the National Register of Historic Places. Planetary Review gave it high rankings for Most Beautiful Campus this year.'
  },{
    name: 'Davidson College',
    imageUrl: 'https://amp.businessinsider.com/images/562901f19dd7cc25008c3ea5-1920-1440.jpg',
    address: 'Davidson, NC',
    description: 'Kingdom has a 260-acre campus and is famous for its Gothic Revival architecture, but the school is peppered with contrasting modernist buildings.'
  },{
    name: 'Whitman College',
    imageUrl: 'https://amp.businessinsider.com/images/520273a9ecad049a5100000e-960-720.jpg',
    address: 'Walla Walla, Washington',
    description: 'Whitmans campus doubles as an outdoor art museum, with over 20 sculptures around the school.'
  },
  ]

  const students = [{
    firstName: 'Susannah',
    lastName: 'Cerreta',
    email: 'shutchinson@gmail.com',
    imageUrl: 'https://i.pinimg.com/236x/36/aa/c6/36aac687cd4afb50123c4d5fcadf9f1f--panda-craft-home-decor-office-accessories.jpg',
    gpa: "4.0"

  }, {
    firstName: 'Sean',
    lastName: 'Keough',
    email: 'skeoug@gmail.com',
    imageUrl: 'http://www.mascotdesigngallery.com/wp/wp-content/uploads/2014/07/bp.blogspot.png',
    gpa: "3.5"
  }, {
    firstName: 'Alessandra',
    lastName: 'Potash',
    email: 'apotash@gmail.com',
    imageUrl: 'https://i.pinimg.com/736x/d5/15/f7/d515f7b7e4a9b993b6daecfbb4884d28--hipster-drawings-kawaii-drawings.jpg',
    gpa: "3.8"
  }, {
    firstName: 'Rosa',
    lastName: 'Bordone',
    email: 'rbordone@gmail.com',
    imageUrl: 'https://i.pinimg.com/236x/14/de/4a/14de4a2a091d3e88d7c5414a1ad39420--kawaii-drawings-doodle-drawings.jpg',
    gpa: "3.9"
  },{
    firstName: 'Michael',
    lastName: 'Blumenthal',
    email: 'mblumenthal@gmail.com',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-C6DfqF8A3ZXdhikxLk_uFWB-NBeF74J-IkHBXhnqRvUuCwY5SPhEklEM',
    gpa: "3.0"
  },{
    firstName: 'Jen',
    lastName: 'Cannova',
    email: 'jcannova@gmail.com',
    imageUrl: 'https://i.pinimg.com/originals/1e/33/cb/1e33cb5afa2d43e7be0b1fff060f8866.jpg',
    gpa: "4.0"
  }];



  const seed = async () => {
    await db.sync({force: true})
    Promise.all(students.map(student => {
      return(
        Students.create(student)
        )
      }
    ))
    .then(() => {
      Promise.all(campuses.map(campus => {
        return(
          Campuses.create(campus)
        )
      }))
    })
  }
  
  seed()
    .catch(err => {
      console.error(red('Something is wrong!'))
      console.error(err)
      db.close()
    })


