import React from "react";
import { Typography } from "@mui/material";
import fetchModel from "../../lib/fetchModelData";
// import "../images"
import "./styles.css";
import {Link} from 'react-router-dom'
/**
 * Define UserPhotos, a React component of CS142 Project 5.
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.id=props.match.params.userId;
    this.state={photos:''};
    // const info=window.cs142models.userModel(this.id);
    fetchModel(`http://localhost:3000/user/${this.id}`).then(response=>{
      const info=response.data;
      const message = `Photos of ${info.first_name} ${info.last_name}`;
      this.props.sendDataToParent(message);
  });
    fetchModel(`http://localhost:3000/photosOfUser/${this.id}`).then(response=>{
      this.setState({photos:response.data});
  });
 }
  componentDidUpdate(prevProps) {
    // Check if the userId has changed
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.id=this.props.match.params.userId;
      fetchModel(`http://localhost:3000/user/${this.id}`).then(response=>{
        const info=response.data;
      const message = `Photos of ${info.first_name} ${info.last_name}`;
      this.props.sendDataToParent(message);
    });
      fetchModel(`http://localhost:3000/photosOfUser/${this.id}`).then(response=>{
        this.setState({photos:response.data});
    });
    }
  }

  render() {
      {/* const info=window.cs142models.userModel(this.id); */}
      // const photos=window.cs142models.photoOfUserModel(this.id);
      // console.log(photos);
      // console.log(photos);
    return this.state.photos&&this.state.photos.map((p)=>(
      <div key={p._id} className="photo"> 
      <Typography>
        <div>
        {p.date_time}
        </div>
        <img src={`/images/${p.file_name}`} alt="description" /> 
        {p.comments&&p.comments.map((c)=>(
          <div key={c._id}>
            <div>
            {c.date_time}
            </div>
            <div>
            <Link to={`/users/${c.user._id}`}>{`${c.user.first_name} ${c.user.last_name}`}</Link>
            </div>
            <div>
            {c.comment}
            </div>
          </div>
        ))}
        </Typography>
      </div>
    )
      // <Typography variant="body1">
      //   This should be the UserPhotos view of the PhotoShare app. Since it is
      //   invoked from React Router the params from the route will be in property
      //   match. So this should show details of user:
      //   {this.props.match.params.userId}. You can fetch the model for the user
      //   from window.cs142models.photoOfUserModel(userId):
      //   <Typography variant="caption">
      //     {JSON.stringify(
      //       window.cs142models.photoOfUserModel(this.props.match.params.userId)
      //     )}
      //   </Typography>
      // </Typography>
    );
  }
}

export default UserPhotos;
