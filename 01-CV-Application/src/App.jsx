import { useState } from 'react'
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
    education:[],
    experience: []
  }


  const [resumeData, setResumeData] = useState(INITIAL_RESUME_DATA);
  

  return (
    <>
      <General resumeData={resumeData} setResumeData={setResumeData}/>
      <Education resumeData={resumeData} setResumeData={setResumeData}/>
      <Experience resumeData={resumeData} setResumeData={setResumeData}/>
      <Resume resumeData={resumeData} setResumeData={setResumeData}/>
    </>
  )
}

export default App
