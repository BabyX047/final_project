import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function CourseDetail(){
    useEffect(() => {
        document.title = "Course Detail";
        });
    let {course_id}=useParams();
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                <img src="/logo512.png" className="img-thumbnail" alt="Course Image"/>
                </div>
                <div className="col-md-8">
                    <h3>Course Detail</h3>
                    <p>Course Description</p>
                    <p className="fw-bold">Course By: <Link to="/teacher-detail/1">Teacher 1</Link></p>
                    <p className="fw-bold">Duration: 3 hours 30 minutes</p>
                    <p className="fw-bold">Total Enrolled: 456 Students</p>
                    <p className="fw-bold">Rating: 4/5</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h5>Course Videos</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Introduction
                        <span className="float-end">
                            <span className="me-5">1 Hr 5 Mins</span>
                            <button className="btn btn-sm btn-danger float-end" 
                            data-bs-toggle="modal" data-bs-target="#VideoModal1"><i className="bi-youtube"></i></button>
                        </span>
{/* Video Modal Start */}
<div className="modal fade" id="VideoModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Video Modal End */}
                    </li>
                    <li className="list-group-item">Project Setup
                        <span className="float-end">
                            <span className="me-5">45 Mins</span>
                            <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Start with functional components
                        <span className="float-end">
                            <span className="me-5">1 Hr 15 Mins</span>
                            <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Go-on with functional components
                        <span className="float-end">
                            <span className="me-5">3 Hr 30 Mins</span>
                            <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                    <li className="list-group-item">Fin with functional components
                        <span className="float-end">
                            <span className="me-5">1 Hr</span>
                            <button className="btn btn-sm btn-danger float-end"><i className="bi-youtube"></i></button>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 className="pb-1 mb-4 mt-5">Related Courses </h3>
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/detail/1"><img src="/logo512.png" className="card-img-top" alt="..."/></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to="/detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                        <h5 className="card-title"><a href="#">Course Title</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;