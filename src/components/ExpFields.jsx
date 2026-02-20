import {useId} from "react";

export default function ExpFields({fieldId, handleChange}) {
    const compNameId = useId();
    const posTitleId = useId();
    const mainRespId = useId();
    const startDateId = useId();
    const endDateId = useId();

    return(
        <form action="#" className="exp-form">           
                <label htmlFor={compNameId}>Company Name: </label>
                <input type="text" name="compName" id={compNameId}  onChange={(e) => handleChange(fieldId, "companyName", e.target.value)}/>
                <label htmlFor={posTitleId}>Position Title: </label>
                <input type="text" name="posTitle" id={posTitleId}  onChange={(e) => handleChange(fieldId, "positionTitle", e.target.value)}/>
                <label htmlFor={mainRespId}>Your Main Responsibilities: </label>
                <textarea name="mainResp" id={mainRespId} placeholder="Describe your main responsibilities in the job."  onChange={(e) => handleChange(fieldId, "mainResponsibility", e.target.value)}></textarea>
                <label htmlFor={startDateId}>Job Started at: </label>
                <input type="text" name="startDate" id={startDateId}  onChange={(e) => handleChange(fieldId, "startDate", e.target.value)}/>
                <label htmlFor={endDateId}>Job until: </label>
                <input type="text" name="endDate" id={endDateId}  onChange={(e) => handleChange(fieldId, "endDate", e.target.value)}/>
        </form>
    );
}