import React, {useState} from "react"




export const Waterloo = () => {
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
      <h1> Information about University of Waterloo - </h1>
      <p>At University of Waterloo you'll learn about algorithms, operating systems, software testing, machine learning, principles of programming languages, compiler construction and many more topics related to math and computers. Co-op is available and you’ll have 4 co-op terms if you decide to take co-op and the program is 5 years long. 

        <br></br>
        <br></br>
      You will need take the following courses in high school
      <ul>
      <li>Advanced Functions</li>
      <li>Calculus and Vectors</li>
      <li>Any Grade 12 U English</li>
      <li>One other 4U course</li>
      </ul>
      <br></br>
      Your average should be at least in the low 90s and good extracurriculars. Applicants must write the Euclid contest in Grade 12 for scholarships. However, writing other Waterloo contests is recommended as it increases your chances of getting in.  You don’t need to know how to programme in order to get in but it is recommended to have some programming experience.   
      The annual tuition fee for the first year is approximately $15,000 CAD and it’s $63,000 for international students. Co-op students have to pay the co-op fee which is $700.  
      </p>  
    
    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>
    </div>
  )
}
