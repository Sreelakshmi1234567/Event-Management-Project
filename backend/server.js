

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());
const port = 2000;

const Usermodel = require('./models/User');
const UserService = require('./models/Service')
const weddingmodel =require('./models/Wedding')
const conferancemodel = require('./models/Conferance')
const productmodel = require('./models/Product')
const awardmodel = require('./models/Award')

mongoose.connect('mongodb://localhost:27017/Management', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

 //signup and loginpage
app.post('/register', (req, res) => {
    Usermodel.create(req.body)
        .then(user => res.json({ message: 'User registered successfully', user }))
        .catch(err => res.status(400).json({ error: 'User registration failed', details: err }));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    Usermodel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ message: 'Login successful' });
                } else {
                    res.status(401).json({ error: 'Incorrect password' });
                }
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch(err => res.status(500).json({ error: 'Login failed', details: err }));
});


// weddingdecorServices
app.post('/servicepost',async(req,res)=>{
    const{title,image} = req.body;
    try{
        const newservice= new UserService({title,image});
        await newservice.save();
        res.status(202).json(newservice);
    }catch(err){
        res.status(500).json({err:'error on adding service'});
    }
})

app.get('/serviceget',async(req,res)=>{
    try{
        const services=await UserService.find();
        res.json(services);
    }catch(err){
        res.status(300).json({err:'error on fetching services'})
    }
})

app.put('/service/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,image}= req.body;
    try{
        const updatedservice = await UserService.findByIdAndUpdate(
            id,
            {title,image},
            {new:true}
        );
        res.json(updatedservice);
    }catch(err){
        res.status(400).json({err:'error on updating service'})
    }
});

app.delete('/service/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await UserService.findByIdAndDelete(id);
        res.json({message:'service deleted'})
    }catch(err){
        res.status(301).json({err:'error on deleting'})
    }
});
//weddingmanagement

app.post('/weddingpost',async(req,res)=>{
    const{title,image} = req.body;
    try{
        const newservice= new weddingmodel({title,image});
        await newservice.save();
        res.status(202).json(newservice);
    }catch(err){
        res.status(500).json({err:'error on adding service'});
    }
})

app.get('/weddingget',async(req,res)=>{
    try{
        const services=await weddingmodel.find();
        res.json(services);
    }catch(err){
        res.status(300).json({err:'error on fetching services'})
    }
})

app.put('/wedding/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,image}= req.body;
    try{
        const updatedservice = await weddingmodel.findByIdAndUpdate(
            id,
            {title,image},
            {new:true}
        );
        res.json(updatedservice);
    }catch(err){
        res.status(400).json({err:'error on updating service'})
    }
});

app.delete('/wedding/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await weddingmodel.findByIdAndDelete(id);
        res.json({message:'service deleted'})
    }catch(err){
        res.status(301).json({err:'error on deleting'})
    }
});
//conferancemanagement
app.post('/conferancepost',async(req,res)=>{
    const{title,image} = req.body;
    try{
        const newservice= new conferancemodel({title,image});
        await newservice.save();
        res.status(202).json(newservice);
    }catch(err){
        res.status(500).json({err:'error on adding service'});
    }
})

app.get('/conferanceget',async(req,res)=>{
    try{
        const services=await conferancemodel.find();
        res.json(services);
    }catch(err){
        res.status(300).json({err:'error on fetching services'})
    }
})

app.put('/conferance/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,image}= req.body;
    try{
        const updatedservice = await conferancemodel.findByIdAndUpdate(
            id,
            {title,image},
            {new:true}
        );
        res.json(updatedservice);
    }catch(err){
        res.status(400).json({err:'error on updating service'})
    }
});

app.delete('/conferance/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await conferancemodel.findByIdAndDelete(id);
        res.json({message:'service deleted'})
    }catch(err){
        res.status(301).json({err:'error on deleting'})
    }
});
//Productlaunch
app.post('/productpost',async(req,res)=>{
    const{title,image} = req.body;
    try{
        const newservice= new productmodel({title,image});
        await newservice.save();
        res.status(202).json(newservice);
    }catch(err){
        res.status(500).json({err:'error on adding service'});
    }
})

app.get('/productget',async(req,res)=>{
    try{
        const services=await productmodel.find();
        res.json(services);
    }catch(err){
        res.status(300).json({err:'error on fetching services'})
    }
})

app.put('/product/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,image}= req.body;
    try{
        const updatedservice = await productmodel.findByIdAndUpdate(
            id,
            {title,image},
            {new:true}
        );
        res.json(updatedservice);
    }catch(err){
        res.status(400).json({err:'error on updating service'})
    }
});

app.delete('/product/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await productmodel.findByIdAndDelete(id);
        res.json({message:'service deleted'})
    }catch(err){
        res.status(301).json({err:'error on deleting'})
    }
});

//Awardcerimonies

app.post('/awardpost',async(req,res)=>{
    const{title,image} = req.body;
    try{
        const newservice= new awardmodel({title,image});
        await newservice.save();
        res.status(202).json(newservice);
    }catch(err){
        res.status(500).json({err:'error on adding service'});
    }
})

app.get('/awardget',async(req,res)=>{
    try{
        const services=await awardmodel.find();
        res.json(services);
    }catch(err){
        res.status(300).json({err:'error on fetching services'})
    }
})

app.put('/award/:id',async(req,res)=>{
    const {id}=req.params;
    const {title,image}= req.body;
    try{
        const updatedservice = await awardmodel.findByIdAndUpdate(
            id,
            {title,image},
            {new:true}
        );
        res.json(updatedservice);
    }catch(err){
        res.status(400).json({err:'error on updating service'})
    }
});

app.delete('/award/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        await awardmodel.findByIdAndDelete(id);
        res.json({message:'service deleted'})
    }catch(err){
        res.status(301).json({err:'error on deleting'})
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

