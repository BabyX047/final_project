import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';

const baseurl='http://127.0.0.1:8000/api';
function TeacherAddCourse(){
    const [cats,setCats]=useState([]);

    useEffect(() => {
        try {
            axios.get(baseurl+'/category',)
            .then((res)=>{
                if(res.data.bool==true){
                    console.log(res.data);
                }
        });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                <div className="card">
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                        <div class=""mb-3 row>
                            <label for="category" className="form-label">Category</label>
                            <select name='category' class="form-control">
                                o
                            </select>
                        </div>
                        <div class="mb-3 row">
                            <label for="title" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="Title"/>
                        </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="description" class="col-sm-2 col-form-label">Description</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="description"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="video" class="col-sm-2 col-form-label">Featured Image</label>
                            <div class="col-sm-10">
                            <input type="file" class="form-control" id="video"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="techs" class="col-sm-2 col-form-label">Technologies</label>
                            <div class="col-sm-10">
                            <input type="textarea" class="form-control" placeholder="Scratch, Office, Comupter repair and maintenance, python" id="techs"/>
                            </div>
                        </div>
                        <div>
                            <hr />
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                            </div>
                        </div>
                </section>
            </div>
        </div>
    );
}

export default TeacherAddCourse;