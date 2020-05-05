import React, {Component, Fragment } from 'react';
import axios from 'axios';



export default class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Place all JSON Response in here 
            // this.setState({ imageURL: response.data.message });
            /*  
  render() {
    const { imageURL } = this.state;
    return (
      <img src={imageURL} />
    );
  }
  */
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`https://covidtracking.com/api/states`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                  <div>
                      {u.state},
                      {u.deaths},
                      {u.positive},
                      {u.negative},
                      {u.currentlyHospitalized}
                  </div>
                )

                this.setState({
                  users
                })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <table>
             <Fragment>
            <thead>{this.state}</thead>
            <tbody>
               
                    <tr>
                        <td>{this.positive}</td>
                        <td>{this.negative}</td>
                        <td>{this.currentlyHospitalized}</td>
                        <td>{this.deaths} </td>
                    </tr>
                
            </tbody>
            </Fragment>
          </table>

        )
    }
}