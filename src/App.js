import React, { useState } from 'react';
//import 'semantic-ui-css/semantic.min.css'

const produto = require('./img/projeto.png');

function App() {

  const [count, setcount] = useState(0);

  return (
    <div className="App"> 
    <section>
    <header></header> 
    </section>

    <section>
      <body>
          <div >
              <h2 className="cart">&#128722; {count}</h2>
          </div>

          <h2 className="topo">Vue mastery Socks</h2>

          <div className="img">
              <img src={produto} />
          </div>
          
          <h2 className="principal1">Details</h2>
          <ul>
             <li>80% cotton</li>
             <li>20% polyester</li>
             <li>Gender-neutral</li>
          </ul>

          <div>
              <h2 cla>Colors:</h2>
          </div>

          <div className="cor1">  
          </div>

          <div className="cor2">  
          </div>

          <div>
             <button onClick={()=> setcount(count +1)}>Adicionar</button>
          </div>
      </body>
    </section>
    
    </div>  
    
  );
}

export default App;
