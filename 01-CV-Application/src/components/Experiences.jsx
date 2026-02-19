import ExpFields from "./ExpFields";
import { useState } from "react";

export default function Experience({resumeData, setResumeData}) {
    const [expFieldCount, setExpFieldCount] = useState(1);

    const handleAddExp = () => {
        setExpFieldCount(prev => prev + 1);
    }
    return(
        <div id="exp-container">
            {
                Array.from({length: expFieldCount}).map((_, i) => (
                    <ExpFields key={i} resumeData={resumeData} setResumeData={setResumeData}/>
                ))
            }
            <button onClick={handleAddExp}>Add Experience</button>
        </div>
    )
}