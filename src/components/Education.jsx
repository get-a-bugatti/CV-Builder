import {useEffect, useState} from "react";
import EduFields from "./EduFields";

export default function Education({ education, handleAdd, handleChange, handleDelete }) {
    
    return(
        <div id="edu-container">
            <h2 className="section-topic">Education</h2>
                {
                    education.map((el, idx) => {

                        return(
                            <div key={idx} className="section-form">
                                <EduFields handleChange={handleChange} fieldId={el.id}/>
                                <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                                <hr className="fieldsSeparator" />
                            </div>
                        );
                    })
                }
            <button onClick={handleAdd}>Add Education</button>
        </div>
    );
}