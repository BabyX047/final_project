import Header from './Header';
import Home from './Home';
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';
import About from './About';
import Footer from './Footer';

//Teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherMyCourses from './Teacher/TeacherMyCourses';
import TeacherMyUsers from './Teacher/TeacherMyUsers';
import TeacherAddCourse from './Teacher/TeacherAddCourse';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
//import TeacherLogout from './Teacher/TeacherLogout';

//User
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavoriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';
//import Logout from './User/Logout';

//List Pages
import AllCourses from './AllCourses';
import AllTeachers from './AllTeachers';
import CategoryCourses from './CategoryCourses';

import { Routes as Switch,Route } from 'react-router-dom';
import TeacherLogout from './Teacher/TeacherLogout';

function Main() {
  return (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:course_id" element={<CourseDetail />} />
            <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />} />
            <Route path="/all-courses" element={<AllCourses />} />
            <Route path="/all-teachers" element={<AllTeachers />} />
            <Route path="/category/:category_slug" element={<CategoryCourses />} />

            //Teacher
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/teacher-register" element={<TeacherRegister />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher-my-courses" element={<TeacherMyCourses />} />
            <Route path="/teacher-my-users" element={<TeacherMyUsers />} />
            <Route path="/teacher-add-course" element={<TeacherAddCourse />} />
            <Route path="/teacher-profile-settings" element={<TeacherProfileSetting />} />
            <Route path="/teacher-change-password" element={<TeacherChangePassword />} />
            <Route path="/teacher-logout" element={<TeacherLogout />} />

            //User
            <Route path="/user-login" element={<Login />} />
            <Route path="/user-register" element={<Register />} />
            <Route path="/user-dashboard" element={<Dashboard />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/favorite-courses" element={<FavoriteCourses />} />
            <Route path="/recommended-courses" element={<RecommendedCourses />} />
            <Route path="/profile-settings" element={<ProfileSetting />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/user-logout" element={<Login />} />
        </Switch>
        <Footer />
    </div>
  );
}

export default Main;
