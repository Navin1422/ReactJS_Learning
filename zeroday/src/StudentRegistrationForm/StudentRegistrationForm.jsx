import React from "react";
import "./StudentRegistrationForm.css"
const StudentForm = () => {
    return (
        <div className="container">
            <h2>Student Registration Form</h2>

            <form>
                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                </div>

                <div className="input-group">
                    <label>Email</label>
                    <input type="email" placeholder="example@gmail.com" required />
                </div>

                <div className="input-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="9876543210" required />
                </div>

                <div className="input-group">
                    <label>Gender</label>
                    <select required>
                        <option>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Date of Birth</label>
                    <input type="date" required />
                </div>

                <div className="input-group">
                    <label>Course</label>
                    <select required>
                        <option>Select Course</option>
                        <option>B.Tech</option>
                        <option>B.Sc</option>
                        <option>BCA</option>
                        <option>MBA</option>
                        <option>MCA</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Address</label>
                    <textarea rows="3" placeholder="Enter your address"></textarea>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default StudentForm;
