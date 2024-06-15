import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function AllTeachers() {
    useEffect(() => {
      document.title = "Teachers";
    });
    return(
        <div className="container mt-3">
        {/* All Teachers */}
      <h3 className="pb-1 mb-4">All Teachers </h3>
      <div className="row mb-4">
        <div className="col-md-3 mb-4">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End latest Courses */}
      {/* Pagination start */}
      <nav aria-label="Page navigation example mt-5">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
      {/* Pagination End */}
      </div>
    );
}

export default AllTeachers;