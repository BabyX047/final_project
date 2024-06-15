import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function TeacherLogout(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>
                <section className="col-md-9">
                    Logout
                </section>
            </div>
        </div>
    )
}

export default TeacherLogout;