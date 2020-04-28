import React from 'react';


    export default class CoronaList extends React.Component {
        constructor(props) {
          super(props);
      
          this.state = {person: []};
        }
      
        componentDidMount() {
          this.UserList();
        }
      
        UserList() {
          $.getJSON('https://covidtracking.com/api/states')
            .then(({ results }) => this.setState({ corona: results }));
        }
      
        render() {
          const persons = this.state.person.map((item, i) => (


    
        return ( 
            <div> 
                <table>
                <thead>
                  <tr>  
                    <th>States</th>
                    <th>Positive</th>
                    <th>negative</th>
                    <th>Hospitalized</th>
                  </tr>
                  </thead>
                  
                  <tbody>
                  <tr>
                    <td>item.states</td>
                    <td>item.positive</td>
                    <td>item.negative</td>
                    <td>item.hospitalizedCurrently</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  </tfoot>
                </table> 
            </div> 
        ); 
    } 
} 

export default CoronaList;