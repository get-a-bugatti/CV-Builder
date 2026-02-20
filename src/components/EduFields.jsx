import { useState, useId } from "react";

export default function EduFields({ handleChange, fieldId }) {
    const sclNameId = useId();
    const stdTitleId = useId();
    const startDateId = useId();
    const endDateId = useId();



    return(
        <form action="#" className="edu-form">
                <label htmlFor={sclNameId}>School Name: </label>
                <input type="text" name="schoolName" id={sclNameId} onChange={(e) => handleChange(fieldId, "sclName", e.target.value)}/>
                <label htmlFor={stdTitleId}>Study Title: </label>
                <input type="text" name="studyTitle" id={stdTitleId}  onChange={(e) => handleChange(fieldId, "stdTitle", e.target.value)}/>
                <label htmlFor={startDateId}>Start Date: </label>
                <input type="text" name="startDate" id={startDateId} placeholder="E.g., August 2026"  onChange={(e) => handleChange(fieldId, "startDate", e.target.value)} />
                <label htmlFor={endDateId}>End Date: </label>
                <input type="text" name="endDate" id={endDateId} placeholder="E.g., August 2026"  onChange={(e) => handleChange(fieldId, "endDate", e.target.value)}/>
        </form>
    );
}