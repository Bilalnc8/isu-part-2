import React, {useState} from "react"

export const Brainstation = () => {

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
      <h1> <b>Information about Brainstation</b> </h1>
      <p>Brainstation's bootcamp is 80 days long. There is no co-op offered. In the bootcamp students learn how to make websites using Html, Css, Javascript, Node js and React js. There are no requirements. You don’t need to have any programming experience. Your grades don't matter either. You just need to fill the admission form. The cost for the course is $15,000 CAD</p>
      
      
    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

      </div>

  )
}

