import React, {useState} from 'react'

export const Mcmaster = () => {
    const [fontsize, setfontsize] = useState(20)

  const idk = () => {
    setfontsize(fontsize + 5)
  }
  const sub = () => {
    setfontsize(fontsize - 5)
  }
  return (
    <div id="idk" style={{
        fontSize: `${fontsize}px`
      }}> 
      <h1> Information about McMaster</h1>
      <br></br>
      <p> At Mcmaster the computer science program is 4 years long and co-op is also available. 
      At McMaster you’ll learn about discrete math for computer science, principles of programming languages, advanced databases, parallel programming, computer networks and security and logical reasoning for computer science. 
      <br></br>
      <br></br>

      The requirements are to have a High School Diploma and take six Grade 12 U/M level courses including:
      <ul>
      <li>ENG4U</li>
      <li>MCV4U</li>
      <li>Two of SBI4U, SCH4U, SPH4U, SES4U, ICS4U or TEJ4M</li>
      </ul>
      Programming knowledge is not required.
      <br></br>
      <br></br>
      To get in you need an overall percentage of 90%. The average cost for tuition, residence and a meal plan at McMaster is about $43,000 CAD
      </p>

    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}
