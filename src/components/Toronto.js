import React,{useState} from 'react'

export const Toronto = () => {
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
      <h1> Information about University Of Toronto </h1>
      <br></br>
      <p>The computer science program is 4 years long. They have the option of co-op. At University of Toronto students will learn about data science, artificial intelligence, computer systems, game design, theory of computation, web and internet technologies and scientific computing. 
      <br></br>
      <br></br>
      The requirements are  Ontario Secondary School Diploma

Six 4U/M courses, including:
<ul>
<li>Advanced Functions (MHF4U)</li>
<li>Calculus & Vectors (MCV4U)</li>
<li>English (ENG4U)</li>
<li>Mathematics of Data Management (MDM4U) is recommended</li>
</ul>
<br></br>
<br></br>
Your average should be in the low 90s. The tuition fee in the first year is $6,100 CAD but after the first year it increases to $11,420. 
</p>
    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}
