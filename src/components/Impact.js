import React, {useState} from 'react'

export const Impact = () => {
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
      <h1> How Adaptive technologies have impacted software engineering </h1>
      <br></br>
      <p>Software engineers spend a ton of their time typing on keyboards. Maltron expanded keyboard is a keyboard designed for people that have cerebral palsy or people that can’t use their hands. Cerebral palsy affects a person's ability to move and maintain balance and posture. The keyboard basically allows the user to type with their feet rather than their hands. This makes it easier for disabled people to type. The keyboard allows more people such as people with Cerebral palsy to be software engineers.

      <br></br>
      <br></br>
      Zoom feature in chrome makes software engineering more accessible for people with bad eyesight. The zoom feature allows people with bad eyesight to see the screen better. For example, it could help them read small text. In software engineering you're mostly using a screen to do work. The zoom feature could help software engineers to better look at code. 
      
      <br></br><br></br>
      Adaptive mouses - Software engineers use their mouse frequently. As the code/ flowcharts are made on computers. The mice are used to navigate throughout the computer. However some people cannot use a mouse, like people with repetitive strain injury. The people who have this can not use a generic mouse for a long period of time. With an adaptive mouse they can use the mouse for a longer period of time without feeling pain. 
      
      <br></br><br></br>
      Text to speech - Some people don’t have good eyesight and some people can’t see at all. So using a text to speech tool is very helpful for them. Text to speech allows them to listen to what they wrote. For example a blind person could write code on the python text editor. Then he/she could copy and paste that code on a text-to-speech to see what they wrote. This basically gives more people the opportunity to become a software engineer as people write code on computers.
      <br></br><br></br>
      In general these adaptive technologies have made software engineering a more accessible career for people. By using adaptive technology disabled people can also become software engineers. 
      </p>
    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}
