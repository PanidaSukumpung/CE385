import  express  from "express";
import { prisma } from '../lib/prisma'
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Prisma API!');
});

// เพิ่มข้อมูล user
app.post('/user', async (req , res) => {
    const {name , email} = req.body;
    try {
        const user = await prisma.user.create({
            data: {name, email},
        })
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to create user'});
    }
});

// ดึงข้อมูลทั้งหมดจากตาราง Users
app.get('/users', async (req , res) => {
    try {
        const users = await prisma.user.findMany(); //findMany คือดึงข้อมูลมรทั้งหมด
        res.json(users);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch users'});
    }
});

//แก้ไขข้อมูล User
app.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const { name , email} = req.body;
    try {
        const user = await prisma.user.update({
            where: {Userid: id},
            data: {name , email},
        });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to update user'});
    }
});

//work1.1 ดึงข้อมูล user โดยใช้ email
app.get('/users/email/:email', async (req , res) => {
    const { email } = req.params
    try {
        const users = await prisma.user.findUnique({
            where: {email : email}
        }
            
        ); //findMany คือดึงข้อมูลมรทั้งหมด
        res.json(users);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch users'});
    }
});

//work1.2 ลบข้อมูล user โดยใช้ id
app.delete('/users/:id', async (req,res) => {
    const { id } = req.params;
      try {
        const users = await prisma.user.delete({
            where: {Userid: id}
        });
        res.json(users);
    }
    catch (error) {
        res.status(404).json({error: 'Failed to delete user'});
    }

})

//work2

//2.1post
app.post('/post' , async (req, res) => {
    const {title, content , authorId} = req.body
    try {
        const post = await prisma.post.create({
            data: {title,content,authorId},
        })
        res.status(201).json(post)
    }
    catch (error) {
        res.status(500).json({error: 'Failed to create posts'});
    }
})

//2.2get
app.get('/posts', async(req,res) => {
    try{
        const posts = await prisma.post.findMany()
        res.json(posts)
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch posts'});
    }
})

//2.3get by id
app.get('/posts/:id', async(req,res) => {
    const { id } = req.params
    try{
        const posts = await prisma.post.findUnique({
            where: {postId: id}
        })
        res.json(posts)
    }
    catch (error) {
        res.status(500).json({error: 'Failed to fetch posts'});
    }
})

//2.4put by id
app.put('/posts/:id' ,async (req,res) => {
    const { id } = req.params
    const {title , content} = req.body
     try {
        const posts = await prisma.post.update({
            where: {postId: id},
            data: {title , content},
        });
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to update user'});
    }
})

//2.5delete by id
app.delete('/posts/:id', async(req,res) => {
    const { id } = req.params
    try {
         const posts = await prisma.post.delete({
            where: {postId: id}
        })
        res.json(posts)
    }
    catch (error) {
          res.status(500).json({error: 'Failed to delete a post'});
    }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});