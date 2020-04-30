import React, { Component } from 'react';
import axios from "axios";

export default axios.create({
  baseURL: "https://covidtracking.com/api/states",
  responseType: "json"
});
 
const API = 'https://covidtracking.com/api/states';
 
class CoronaList extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
 
    render() {
      const { hits } = this.state;
        return (
           

            <React.Fragment>

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
                          {hits.map(hit =>
                            <tr key={hit.state}>
                                <td>{hit.state}</td>
                                <td>{hit.positive}</td>
                                <td>{hit.negative}</td>
                                <td>{hit.hospitalizedCurrently}</td>
                            </tr>
                          )}
                        </tbody>
                        
                        
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default CoronaList