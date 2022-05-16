import React, {useState} from 'react'

export const Privacy = () => {
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
      <h1> How computers have caused privacy issues</h1>
      <br></br><br></br>

      <p>Software engineers are mostly hired by tech companies such as Google, Microsoft, Twitter and Amazon. These companies collect the users personal data and use it for their ad algorithm or use the information elsewhere. Software engineers at these companies often work on websites and 79% of websites track users personal information. In the terms and policies section most companies do inform the user that their information is being collected but people mostly don’t read that which is why 41% of the users on the web are unaware that their information is being collected. For example when making a google account, Google asks the user for their location, gender and date of birth. Google can get the users information as the user gave their information while making the account and the user may not know about this. The employees know about this as this whole system was coded by a bunch of software engineers at Google or other companies. 
      </p>

    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
  )
}
