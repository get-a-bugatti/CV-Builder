import {useState} from "react";

export default function Resume({resumeData}) {
    return(
        <div id="resume-container">

        <div className="resume-header">
        <h1 className="name">{resumeData.general.name || "John Doe"}</h1>
        <p className="title">Your Role / Title</p>
        <p className="contact">
            Email: {resumeData.general.email ? `${resumeData.general.email}`: "john.doe@mail.np"} | Phone: {resumeData.general.phone ? `${resumeData.general.phone}`: "98XXXXXXXX"} | Location: Nepal
        </p>
        </div>

        {
            // add later
        /* <div className="section summary">
        <h2>Summary</h2>
        <p>
            Write a short professional summary about yourself here.
        </p>
        </div> 
        */
        }

        <div className="section education">
        <h2>Education</h2>
        <p>Degree - College Name (Year)</p>
        </div>

        <div className="section experience">
        <h2>Experience</h2>

        <div className="job">
            <p className="job-title">Job Title - Company Name</p>
            <p className="job-date">2022 - Present</p>
            <ul>
            <li>Did something important</li>
            <li>Achieved something</li>
            </ul>
        </div>

        </div>


        </div>

    );
}