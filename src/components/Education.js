import React, {useState} from "react"





export const Education = () => {
  const [fontsize, setfontsize] = useState(20)

  const idk = () => {
    setfontsize(fontsize + 5)
  }
  const sub = () => {
    setfontsize(fontsize - 5)
  }


  return (
    <div>    
    
    
    <p style={{
      fontSize: `${fontsize}px`
    }}>
     
Describe the career and identify the educational requirements (in Ontario) for this career.


Software engineer 

➢ Does this career require a high school diploma? College diploma? University degree? Masters? PHd? technological program?

You can be a software engineer without having a diploma or degree. Many people in the industry have been able to teach themselves or attend a bootcamp to acquire the knowledge to get a job. However having a diploma, degree or a PHd can be helpful as it’s easier to find a job if someone has those. 
 </p>
     <button onClick={idk}>+</button>
     <button onClick={sub}>-</button>

        

    </div>
  )
}

