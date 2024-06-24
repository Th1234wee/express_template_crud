import { Router } from 'express';
import blog from '../blog.js';
const blogRoute = Router();

blogRoute.post('/createNewBlog' , (request,response) => {
    const { title , description , status } = request.body;

    if(!title && !description && !status){
        response.json({
            message : "Bad Request"
        })
    }
    else{
        blog.push({
            id : blog.length + 1,
            title,
            description,
            status
        })
        response.redirect('/');
    }
})


export default blogRoute;