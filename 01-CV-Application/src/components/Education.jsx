import {useState} from "react";
import EduFields from "./EduFields";

export default function Education({ resumeData, setResumeData }) {
    
    const [eduFieldCount, setEduFieldCount] = useState(1);
    const handleAddEdu = () => {
        setEduFieldCount(prev => prev + 1);
    }

    return(
        <div id="edu-container">
                {
                    Array.from({length: eduFieldCount}).map((_, i) => (
                        <EduFields key={i} resumeData={resumeData} setResumeData={setResumeData}/>
                    ))
                }
            <button onClick={handleAddEdu}>Add Education</button>
        </div>
    );
}