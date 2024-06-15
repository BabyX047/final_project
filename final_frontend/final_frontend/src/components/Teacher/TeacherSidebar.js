import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function TeacherSidebar(){
    useEffect(() => {
        document.title = "Teacher | Dashboard"
    }, [])
    return (
        <div className="card">
            <h5 className="card-header">Dashboard</h5>
            <div className="list-group list-group-flush">
                <Link to='/teacher-dashboard' className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to='/teacher-my-courses' className="list-group-item list-group-item-action">My Courses</Link>
                <Link to='/teacher-add-course' className="list-group-item list-group-item-action">Add Course</Link>
                <Link to='/teacher-my-users' className="list-group-item list-group-item-action">My Users</Link>
                <Link to='/teacher-profile-settings' className="list-group-item list-group-item-action">Profile Setting</Link>
                <Link to='/teacher-change-password' className="list-group-item list-group-item-action">Change Password</Link>
                <Link to='/teacher-login' className="list-group-item list-group-item-action text-danger">Logout</Link>
            </div>
        </div>

    )
}

export default TeacherSidebar;