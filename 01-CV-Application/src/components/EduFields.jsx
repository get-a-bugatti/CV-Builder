import { useState, useId } from "react";

export default function EduFields({resumeData, setResumeData}) {
    const sclNameId = useId();
    const stdTitleId = useId();
    const startDateId = useId();
    const endDateId = useId();

    return(
        <form action="#" className="edu-form">
                <label htmlFor={sclNameId}>School Name: </label>
                <input type="text" name="schoolName" id={sclNameId}/>
                <label htmlFor={stdTitleId}>Study Title: </label>
                <input type="text" name="studyTitle" id={stdTitleId} />
                <label htmlFor={startDateId}>Start Date: </label>
                <input type="date" name="startDate" id={startDateId} />
                <label htmlFor={endDateId}>End Date: </label>
                <input type="date" name="endDate" id={endDateId} />
        </form>
    );
}