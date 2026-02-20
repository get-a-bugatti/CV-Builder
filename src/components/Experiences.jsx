import ExpFields from "./ExpFields";
import { useState } from "react";

export default function Experience({experience, handleAdd, handleChange, handleDelete}) {


    return(
        <div id="exp-container">
            <h2 className="section-topic">Experience</h2>
                {
                    experience.map((el, idx) => {

                        return(
                            <div key={idx} className="section-form">
                                <ExpFields fieldId={el.id} handleChange={handleChange}/>
                                <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                                <hr className="fieldsSeparator" />
                            </div>
                        );
                    })
                }
            <button onClick={handleAdd}>Add Experience</button>
        </div>
    )
}