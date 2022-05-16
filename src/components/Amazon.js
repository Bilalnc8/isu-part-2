import React, {useState} from 'react'

export const Amazon = () => {
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

      <h2>Salary</h2>
      <p>The salary of a software engineer at Amazon is approximately 166k per year. </p>
      <br></br><br></br>
  
      <h2>How they use computers -</h2><br></br>
      <p>At Amazon software engineers use computers to make the apps and website. Computers are used to make their amazon web service system. Obviously they use computers for marketing purposes and in the finance department(excel).
      </p>
  <br></br>
      <h2>Effects on human health and environment caused by using computers at Google - </h2>
  <br></br>
      <p>Amazon wastes a lot of cardboard every single day. Some packages are boxed by Amazon themselves in their own boxes. Their boxes are pre made so that the customers can get their boxes as soon as possible. But this strategy is not good for the environment. Every single product at Amazon is of different size. There are only a few box sizes. So sometimes the actual package could be very small, but it’ll be shipped in a huge box when compared to the actual package. This is because their strategy is not green. They don’t make custom boxes for every single product hence why there is mostly a good amount of emptied space in the box. This is how they waste cardboard and this isn't good for the environment as cardboard is made by cutting trees.
      <br></br><br></br>
      Germs are easily transported at Amazon and this is not good for human health. This is how viruses like covid spread fast. A lot of people are in direct contact with the package. As some packages are first in contact with the manufacturers and then it comes to Amazon where the people take the items out the trucks, scan it and prepare it to be shipped. In the shipping process the driver also touches the package. However if the package was bought in person then there is less direct contact with the package. The item is sent by the manufacturer to the distributor and then the customer can buy the package. In this method there is a delivery driver and a person putting the item in boxes. But some packages are sent directly to the customer by the manufacturer. This is even better than buying it from the store as there are less people touching the product. 
      <br></br><br></br>
      Amazon is making people lazy. Amazon sells everything you can imagine, so the users don’t really need to go outside. This makes the user unhealthy, lazy and could cause depression as staying inside your house could make you depressed. 
      <br></br><br></br>
      Amazon makes the life of disabled people very easy. It could be hard for disabled people to go outside and buy stuff. However with Amazon they don’t need to go outside and buy stuff. 
      </p><br></br><br></br>
      <h2>How to reduce the effects - </h2>
      <p>Items that have a high selling rate, should have a premade box for their size. This would save a little cardboard. For the germ issue Amazon should be santazing the products as they enter and leave the warehouse. Lastly Amazon could have a limit on the amount of stuff ordered in a month. This would force people to get out of their houses.
      </p>
      <br></br><br></br>
  
      <h1>Legal and ethical issues surrounding computer use</h1>
      <br></br>
      <p>Amazon doesn't really have to worry about issues surrounding computer use as the idea is very simple and talking to others is not necessary. Spyware, phishing, keystroke logging or any other viruses are received by clicking on infected links. On amazon getting a virus is not really possible as you cannot post links on amazon. Cyberbullying is not a possibility as you cannot really talk to others using the Amazon app. Biggest problem for Amazon would be false advertisements. That the sellers are using their platform to sell their products but actually lying about the product. Another problem would be that sellers are making fake accounts and giving themselves fake reviews.  Amazon sure does have to worry about more problems but most are not computer related as it’s just an online shopping store. 
      </p>
      <br></br><br></br>
  
      <h1>Solutions to solve the legal and ethical issues -</h1>
      <br></br>
      <p>To counter false advertisement on the Amazon platform, they could make it so that customers could report the seller for false advertisement and ban him from selling the product. Amazon could also ask the manufacturer to send a sample to Amazon so that they could test the product. To stop false reviews they could increase the security. Like make it harder to create an Amazon account, so that it would be hard for people to do botting. They could make it so that the person who actually bought the product could only write a review. 
      </p>
   

    <button onClick={idk}>+</button>
    <button onClick={sub}>-</button>

    </div>
    
  )
}
