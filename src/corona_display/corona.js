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
            <h5 class="card-title" > {corona.country}</h5> 
              <h6 class="card-subtitle mb-2 text-muted" > {contact.email}</h6> 
                <p class="card-text" > {contact.company.catchPhrase}</p>
           </div> 
          </div>
        ))} 
    </div>
)};

export default Corona