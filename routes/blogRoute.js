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
});
blogRoute.post('/editBlog/:id',(request,response) => {
    const id = request.params.id;
    const foundBlogIndex = blog.findIndex(blog => blog.id == id);
    const {title , description , status} = request.body; 

    if(foundBlogIndex != -1){
        blog[foundBlogIndex] = {
            id,
            title,
            description,
            status
        }
        response.redirect('/');
    }
    else{
        response.json({
            "message" : "Blog Not Found"
        })
    }
});
blogRoute.post('/removeBlog/:id',(request,response) => {
    const id = request.params.id;

    const foundBlogIndex = blog.findIndex(blog => blog.id == id);

    if(foundBlogIndex != -1){
        blog.splice(foundBlogIndex,1);
    }else{
        response.json({
            "message" : "Blog Not Found"
        })
    }
})


export default blogRoute;