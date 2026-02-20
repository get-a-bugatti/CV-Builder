import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {General, Education, Experience, Resume} from "./components";
import './App.css'
import './styles/Resume.css'

function App() {
  const INITIAL_RESUME_DATA = {
    general: {
      name: "",
      email: "",
      phone: ""
    },
    education:[newEduEntry()],
    experience: [newExpEntry()]
  }

  const [resumeData, setResumeData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("resumeData"));

    if (data) return data;

    return INITIAL_RESUME_DATA;
  });

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  function newExpEntry() {
      return {
          id: crypto.randomUUID,
          companyName: "",
          positionTitle: "",
          mainResponsibility: "",
          startDate: "",
          endDate: ""
      }
  }

  const addExp = () => {
    setResumeData((prev) => {
      return {
        ...prev,
        experience: [
          ...prev.experience,
          newExpEntry()
        ]
      }
    })
  }

  const deleteExp = (id) => {
    setResumeData((prev) => {
      return {
        ...prev,
        experience: prev.experience.filter(item => item.id !== id)
      }
    })
  }

  const handleExpChange = (id, field, value) => {
    setResumeData((prev) => {
      return {
        ...prev,
        experience: prev.experience.map(item => {
          return item.id === id ? {...item, [field]: value} : item;
        })
      }
    })
  }

  function newEduEntry() {
    return {
      id: crypto.randomUUID,
      sclName: "",
      stdTitle: "",
      startDate: "",
      endDate: ""
    }
  }

  const addEdu = () => {
    setResumeData((prev) => {
      return {
        ...prev,
        education: [
          ...prev.education,
          newEduEntry()
        ]
      }
    })
  }

  const deleteEdu = (id) => {
    setResumeData((prev) => {
      return {
        ...prev,
        education: prev.education.filter(item => item.id !== id)
      }
    })
  }

  const handleEduChange = (id, field, value) => {
    setResumeData((prev) => {
      return {
        ...prev,
        education: prev.education.map(item => {
          return item.id === id ? {...item, [field]: value} : item;
        })
      }
    })
  }




  return (
    <>
      <General resumeData={resumeData} setResumeData={setResumeData}/>
      <Education education={resumeData.education} handleAdd={addEdu} handleChange={handleEduChange} handleDelete={deleteEdu} />
      <Experience experience={resumeData.experience} handleAdd={addExp} handleChange={handleExpChange} handleDelete={deleteExp} />
      <Resume general={resumeData.general} education={resumeData.education} experience={resumeData.experience}/>
    </>
  )
}

export default App
