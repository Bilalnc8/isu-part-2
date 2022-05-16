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
    <div id="idk" style={{
      fontSize: `${fontsize}px`
    }}>    
    
    
      <p>
      You can be a software engineer without having a diploma or degree. Many people in the industry have been able to teach themselves or attend a bootcamp to acquire the knowledge to get a job. However having a diploma, degree or a PHd can be helpful as it’s easier to find a job if someone has those.    
      </p><br></br>
      <p> University of Waterloo, McMaster and University of Toronto offer an undergraduate program in computer science. There is also a coding bootcamp called Brainstation that trains people to be a software engineer.
      </p>
     <button onClick={idk}>+</button>
     <button onClick={sub}>-</button>

        

    </div>
  )
}

