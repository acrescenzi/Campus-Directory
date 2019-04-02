const router = require('express').Router()
const Students = require('../db/models/students')
const Campuses = require('../db/models/campuses')

router.get('/', async(req,res,next) => {
  try{
    res.json({test:'test'})
  }
  catch(err){
    next(err)
  }
})


router.get('/students', async(req,res,next) => {
  try {
    const students = await Students.findAll()
    res.json(students)
  } catch(err){
    next(err)
  }
})

router.get('/students/:id', async(req,res,next) => {
  try {
    const student = await Students.findById(req.params.id)
    if(!student){
      const err = Error('not found')
      err.status - 404
      return next (err)
    }
    res.json(student)
  } catch(err){
    next(err)
  }
})

router.post('/students/new', (req, res, next) => {
  let studentFirst=req.body.firstName;
  let studentLast=req.body.lastName;
  let studentEmail=req.body.email;
  let studentImage=req.body.image;
  let studentCampus=Number(req.body.campusId);
 
  Students.create({
      firstName: studentFirst,
      lastName: studentLast,
      email: studentEmail,
      image: studentImage,
      campusId: studentCampus
  })
  .then(function (data) {
      console.log("DATA",data);
      res.sendStatus(201);
  })
  .catch(next);

});

router.put('/students/edit/:studentId', (req, res, next) => {
  let studentId=req.params.studentId;
  let studentFirst=req.body.firstName;
  let studentLast=req.body.lastName;
  let studentEmail=req.body.email;
  let studentImage=req.body.image;
  let studentCampus=Number(req.body.campusId);

  if(!Number(studentId)){res.sendStatus(500);}
  else{
      Students.findById(studentId)
      .then(function (data) {
          if(data){
              data.update({
                  firstName: studentFirst,
                  lastName: studentLast,
                  email: studentEmail,
                  image: studentImage,
                  campusId: studentCampus
              })
              .then(function() {
                  res.send(data);
              });
          }
          else{
              res.sendStatus(404);
          }
      });
  }
});

router.delete('/students/:id', async(req, res, next) => {
  try{
    res.json(Students.destroy({
      where: {
        id: req.params.id
      }
    }))
  } catch(err){
    next(err)
  }
})

router.get('/campuses', async(req,res,next) => {
  try {
    const campuses = await Campuses.findAll({include: ['Students']})
    res.json(campuses)
  } catch(err){
    next(err)
  }
})

router.get('/campuses/:id', async(req,res,next) => {
  try {
    const campus = await Campuses.find({where:{
      id:req.params.id,
    }, include:['Students']})
    if(!campus){
      const err = Error('not found')
      err.status - 404
      return next (err)
    }
    res.json(campus)
  } catch(err){
    next(err)
  }
})

router.post('/campuses/new', (req, res, next) => {
  console.log('HELLO',req.body);
  let campusName=req.body.name;
  let campusAddress=req.body.address;
  let campusImage=req.body.imageUrl;

  Campuses.create({name:campusName,address:campusAddress, imageUrl:campusImage})
  .then(function (data) {
      console.log("DATA",data);
      res.status(201);
      res.send(data);
  })
  .catch(next);

});


router.put('/campuses/edit/:campusId', (req, res, next) => {
  console.log('HELLO',req.body,req.params.campusId);

  let campusId=req.params.campusId;
  let campusName=req.body.name;
  let campusImage=req.body.image;

  if(!Number(campusId)){res.sendStatus(500);}
  else{
      Campuses.findById(campusId)
      .then(function (data) {
          if(data){
              data.update({
                  name: campusName,
                  image: campusImage
              })
              .then(function() {
                  res.send(data);
              });

          }
          else{
              res.sendStatus(404);
          }
      });
  }

});


router.delete('/campuses/:id', async(req, res, next) => {
  try{
    res.json(Campuses.destroy({
      where: {
        id: req.params.id
      }
    }))
  } catch(err){
    next(err)
  }
})



router.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = router
