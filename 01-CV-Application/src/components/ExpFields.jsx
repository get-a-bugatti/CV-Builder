import {useId, useState} from "react";

export default function ExpFields({resumeData, setResumeData}) {
    const compNameId = useId();
    const posTitleId = useId();
    const mainRespId = useId();
    const startDateId = useId();
    const endDateId = useId();

    return(
        <form action="#" className="exp-form">           
                <label htmlFor={compNameId}>Company Name: </label>
                <input type="text" name="compName" id={compNameId}/>
                <label htmlFor={posTitleId}>Position Title: </label>
                <input type="text" name="posTitle" id={posTitleId} />
                <label htmlFor={mainRespId}>Your Main Responsibilities: </label>
                <textarea name="mainResp" id={mainRespId} placeholder="Describe your main responsibilities in the job."></textarea>
                <label htmlFor={startDateId}>Job Started at: </label>
                <input type="date" name="startDate" id={startDateId} />
                <label htmlFor={endDateId}>Job until: </label>
                <input type="date" name="endDate" id={endDateId} />
        </form>
    );
}