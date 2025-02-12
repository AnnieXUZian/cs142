import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define UserList, a React component of CS142 Project 5.
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state={users:''}

    fetchModel(`http://localhost:3000/user/list`).then(response=>{
      this.setState({users:response.data});
    });
  }

  render() {
    return (
      <div>
        {/* <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window. You might
          choose to use <a href="https://mui.com/components/lists/">Lists</a>{" "}
          and <a href="https://mui.com/components/dividers/">Dividers</a> to
          display your users like so:
        </Typography> */}
        <List component="nav">
          {this.state.users&&this.state.users.map((u)=>{
          return <div key={u._id}>
            <ListItem>
              <Link to={`/users/${u._id}`}>
              <ListItemText primary={`${u.first_name} ${u.last_name}`} />
              </Link>
            </ListItem>
            <Divider />
          </div>})}
        </List>
        {/* <Typography variant="body1">
          The model comes in from window.cs142models.userListModel()
        </Typography> */}
      </div>
    );
  }
}

export default UserList;
