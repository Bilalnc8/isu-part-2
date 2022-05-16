import React, {useState} from 'react'

export const Social = () => {
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
      <h1> How social media has affected Software engineering</h1>
      <br></br><br></br>
      <p>Social media is embedded  in software engineering. Like employees working on group project could be working from home. They could communicate with each other using Discord or slack. Social media has made on calls possible as employers can easily message them on a social media application. Social media can affect a person's career as they can be used as an advertising platform for freelancing software engineers. For instance a freelancer could promote his business on Reddit. As a consequence he could get more clients. Social media is a big reason why this career is thriving. Most of the employers develop social media platforms. So as social media apps got more popular the software industry got better as the jobs started to pay more and there were more jobs available. Lastly, a person could get a job because of social media. For example, if a person has a linkedin profile, employers can see the person's resume and can contact the person if they are interested in employing him. </p>

    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}
