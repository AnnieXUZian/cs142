import React from "react";
import { Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import fetchModel from "../../lib/fetchModelData";

import "./styles.css";

/**
 * Define UserDetail, a React component of CS142 Project 5.
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.id=props.match.params.userId;
    this.state={info:''};
    // const info=window.cs142models.userModel(this.id);
    fetchModel(`http://localhost:3000/user/${this.id}`).then(response=>{
      this.setState({ info: response.data });
      const message = `${this.state.info.first_name} ${this.state.info.last_name}`;
      console.log(message)
      this.props.sendDataToParent(message);
  });
    
  }

  componentDidUpdate(prevProps) {
    // Check if the userId has changed
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.id=this.props.match.params.userId;
      fetchModel(`http://localhost:3000/user/${this.id}`).then(response=>{
        this.setState({ info: response.data });
        const message = `${this.state.info.first_name} ${this.state.info.last_name}`;
        console.log(message)
        this.props.sendDataToParent(message);
    });
    }
  }
  

  render() {
    // const info=window.cs142models.userModel(this.id);
    console.log(this.state.info)
    return (this.state.info&&
      <div>
        <Link to={`/photos/${this.id}`}>View Photos</Link>
        <h3>{this.state.info.first_name} {this.state.info.last_name}</h3>
        <p>Location: {this.state.info.location}</p>
        <p>{this.state.info.description}</p>
        <p>Occupation: {this.state.info.occupation}</p>
      </div>
      // <Typography variant="body1">
      //   This should be the UserDetail view of the PhotoShare app. Since it is
      //   invoked from React Router the params from the route will be in property
      //   match. So this should show details of user:
      //   {this.props.match.params.userId}. You can fetch the model for the user
      //   from window.cs142models.userModel(userId).
      // </Typography>
    );
  }
}

export default UserDetail;
