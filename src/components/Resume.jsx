import {useState} from "react";

export default function Resume({general, education, experience}) {
    return(
        <div id="resume-container">

            <div className="resume-header">
                <h1 className="name">{general.name || "John Doe"}</h1>
                <p className="title">Your Role / Title</p>
                <p className="contact">
                    Email: {general.email ? `${general.email}`: "john.doe@mail.np"} | Phone: {general.phone ? `${general.phone}`: "98XXXXXXXX"} | Location: Nepal
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

                <div className="edu-element">
                    {
                        education.map((el, idx) => {
                            return (
                                <p key={idx}>{el.stdTitle} - {el.sclName} ({el.startDate} - {el.endDate})</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className="section experience">
                <h2>Experience</h2>

                <div className="job">
                    {
                        experience.map((el, idx) => {
                            return(
                                <div className="job-element" key={idx}>
                                    <p className="job-title">{el.positionTitle} - {el.companyName}</p>
                                    <p className="job-date">{el.startDate} - {el.endDate}</p>
                                    <ul>
                                    <li>{el.mainResponsibility}</li>
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>

    );
}