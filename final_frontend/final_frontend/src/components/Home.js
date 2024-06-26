import {Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    document.title = "LMS | Homepage";
    });
  return (
    <div className="container mt-4">
      {/* Latest Courses */}
      <h3 className="pb-1 mb-4">Latest Courses <Link to="/all-courses" className="float-end">See All</Link> </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
          <Link to="/detail/1"><img src="scratch.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/detail/1">Scratch</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="office.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Ms-Office</a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="word.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Ms-Word</a></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <a href="#"><img src="excel.png" className="card-img-top" alt="..."/></a>
            <div className="card-body">
              <h5 className="card-title"><a href="#">Ms-Excel</a></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End latest Courses */}
      {/* Course Teachers */}
      <h3 className="pb-1 mb-4 mt-5">Course Teachers <Link to="/all-teachers" className="float-end">See All</Link> </h3>
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/teacher-detail/1"><img src="teacher.png" className="card-img-top" alt="..."/></Link>
            <div className="card-body">
              <h5 className="card-title"><Link to="/teacher-detail/1">Teacher's Name</Link></h5>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Teachers */}
      {/* Student Testimonials */}
      <h3 className="pb-1 mb-4">Student Testimonials </h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
          <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
          <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End Student Testimonials */}
    </div>
  );
}

export default Home;
