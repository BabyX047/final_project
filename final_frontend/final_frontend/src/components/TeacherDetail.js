import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';


function TeacherDetail(){
    useEffect(() => {
        document.title = "Teacher Details";
    });
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4">
                <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-md-8">
                    <h3>Lewis Gachie</h3>
                    <p>Teacher Description</p>
                    <p className="fw-bold">Skills: <Link to="/category/python">Scratch
                    </Link>, <Link to="/category/python">MS-Office
                    </Link>, <Link to="/category/python">Computer Hardware</Link></p>
                    <p className="fw-bold">Recent Course: <Link to="/category/python">Python</Link></p>
                    <p className="fw-bold">Rating: 4.5/5</p>
                </div>
            </div>
            {/* Course Videos */}
            <div className="card mt-4">
                <div className="card-header">
                    <h5>Course List</h5>
                </div>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" class="list-group-item list-group-item-action">Scratch Course 1</Link>
                    <Link to="/detail/1" class="list-group-item list-group-item-action">Scratch Course 2</Link>
                    <Link to="/detail/1" class="list-group-item list-group-item-action">MS-Office Course 1</Link>
                    <Link to="/detail/1" class="list-group-item list-group-item-action">Computer H/Ware Course 1</Link>
                    <Link to="/detail/1" class="list-group-item list-group-item-action">Computer H/Ware Course 2</Link>
                </div>
            </div>
        </div>
    );
}

export default TeacherDetail;