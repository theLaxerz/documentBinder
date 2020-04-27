import React from 'react'

state = {
    corona: []
}

componentDidMount() {
    fetch('https://covidtracking.com/api/states/daily')
        .then(res => res.json())
        .then((data) => {
            this.setState({
                corona: data
            })
        })
        .catch(console.log)
}


const Corona = ({
    corona
}) => {
    return (  
    <div>
      <center>
        <h3>COVID By State</h3>
       </center > 
       {corona.map((contact) => (
         <div class="card" >
          <div class="card-body" >
            <h5 class="card-title" > {corona.state}</h5> 
              <h6 class="card-subtitle mb-2 text-muted" > {corona.positive}</h6> 
                <p class="card-text"> {corona.positive}</p>
                <p class="card-text">{corona.negative}</p>
                <p class="card-text-b">{corona.death}</p> 
           </div> 
          </div>
        ))} 
    </div>
)};

export default Corona