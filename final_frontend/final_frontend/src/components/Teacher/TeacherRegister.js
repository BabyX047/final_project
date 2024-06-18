import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

const baseurl ='http://127.0.0.1:8000/api/teacher/';
function TeacherRegister(){
    const [teacherData,setteacherData]=useState({
        full_name:'',
        email:'',
        password:'',
        qualifications:'',
        mobile_no:'',
        skills:'',
        status:''
    });
    // change element value
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
    // end

    // Submit form Suraj
    // const submitForm = async (event) => {
    //     event.preventDefault();  // Prevent default form submission
    //     const teacherFormData=new FormData();
    //     teacherFormData.append("full_name", teacherData.full_name)
    //     teacherFormData.append("email", teacherData.email)
    //     teacherFormData.append("password", teacherData.password)
    //     teacherFormData.append("qualifications", teacherData.qualifications)
    //     teacherFormData.append("mobile_no", teacherData.mobile_no)
    //     teacherFormData.append("skills", teacherData.skills)

    //     try {
    //         axios.post(baseurl,teacherFormData).then((response)=>{
    //             setteacherData({
    //                 full_name:'',
    //                 email:'',
    //                 password:'',
    //                 qualifications:'',
    //                 mobile_no:'',
    //                 skills:'',
    //                 status:'success'
    //             })
    //         });
    //     } catch (error) {
    //         console.log(error)
    //         setteacherData({'status':'error'})
    //     }
    // };
    //End

    // SUbmit Form GPT
    
    const submitForm = async (event) => {
        event.preventDefault();  // Prevent default form submission

        const teacherFormData = {
            full_name: teacherData.full_name,
            email: teacherData.email,
            password: teacherData.password,
            qualifications: teacherData.qualifications,
            mobile_no: teacherData.mobile_no,
            skills: teacherData.skills
        };

        try {
            const response = await axios.post(baseurl, teacherFormData, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')  // Add CSRF token header
                }
            });
            if (response.status === 201) {
                setteacherData({
                    full_name: '',
                    email: '',
                    password: '',
                    qualifications: '',
                    mobile_no: '',
                    skills: '',
                    status: 'success'
                });
            } else {
                setteacherData({ ...teacherData, status: 'error' });
            }
        } catch (error) {
            console.error(error);
            setteacherData({ ...teacherData, status: 'error' });
        }
    };

    // Function to get the CSRF token from the cookies
    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };

    // End

    useEffect(() => {
        document.title = "Teacher Register";
    });

    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus=='true'){
        window.location.href = '/teacher-dashboard';
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherData.status=='success' && <p class="text-success">Thanks for registration</p>}
                    {teacherData.status=='error' && <p class="text-danger">Oops, Something went wrong</p>}
                    <div className="card">
                        <h5 className="card-header">Teacher Registration</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Full name</label>
                                    <input value={teacherData.full_name} onChange={handleChange} name="full_name" type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Qualifications</label>
                                    <input value={teacherData.qualifications} onChange={handleChange} name="qualifications" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
                                    <input value={teacherData.mobile_no} onChange={handleChange} name="mobile_no" type="number" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Skills</label>
                                    <textarea value={teacherData.skills} onChange={handleChange} name="skills" className="form-control"></textarea>
                                    <div id="text" class="form-text">Scratch, Word, Excel or Computer Hardware.</div>
                                </div>
                                
                                <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister;