import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function TeacherLogout() {
    localStorage.removeItem('teacherLoginStatus');
    window.location.href = '/teacher-login';
    return (
        <div></div>
    );
}

export default TeacherLogout;