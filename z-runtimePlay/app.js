const express = require("express");
const path = require("path");
const app = express();
const multer = require("multer")
const port = 8000 ||  process.env.PORT;

app.set("view engine", "ejs");

//app.use(express.static("image"));
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'image');
    },
    filename: (req,file,cb)=>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname)) 
    }
})
const upload =multer({storage:storage})

app.get('/', (req,res)=>{
    console.log(req.url, req.method);
    res.render("upload", {message:"upload your profile here"});
})
 /* app.get('/image', (req, res)=>{
  res.sendFile('image/1708960514913.PNG',{root:__dirname})
 }) */
app.post('/uploads', upload.single('img_file'), (req,res)=>{
    console.log(req.file);
    res.json( {data:"recieved"})
})

app.listen(port, () => console.log(`server running on port ${port}`));