import {useState} from "react";

export default function General({resumeData, setResumeData}) {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // Add professional summary part later.

    const handleNameChange = (newName) => {
        setResumeData(prev => ({
            ...prev,
            general: {
                ...prev.general,
                name: newName
            }
        }));
    }

    const handleEmailChange = (newEmail) => {
        setResumeData(prev => ({
            ...prev,
            general: {
                ...prev.general,
                email: newEmail
            }
        }));
    }

    const handlePhoneChange = (newPhone) => {
        setResumeData(prev => ({
            ...prev,
            general: {
                ...prev.general,
                phone: newPhone
            }
        }));
    }

    return (
        <div id="gen-container">
            <form action="#" className="gen-form">
                <fieldset id="gen-fieldset">
                    <legend id="gen-legend">General</legend>
                    <label htmlFor="fullname">Name :</label>
                    <input type="text" name="name" id="fullname" onChange={(e) => handleNameChange(e.target.value)}/>
                    <label htmlFor="useremail">Email :</label>
                    <input type="email" name="email" id="useremail" onChange={(e) => handleEmailChange(e.target.value)} />
                    <label htmlFor="userphone">Phone No. :</label>
                    <input type="tel" name="phone" id="userphone" onChange={(e) => handlePhoneChange(e.target.value)}/>
                </fieldset>
            </form>
        </div>
    )
}