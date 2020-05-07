import React from 'react';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);
export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://covidtracking.com/api/states`, {})
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (




            <ul >
                {this.state.persons.map(person => <li>{person.positive}</li>)}
            </ul>
        )
    }
}
