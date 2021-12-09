import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import MyProfileCompo from "../../components/MyProfile";
import { selectUser } from "../../store/user/selectors";
import "./MyProfile.css";

export default function MyProfile() {
  const user = useSelector(selectUser);
  console.log("user is:", user);

  const { name } = user;

  return (
    <div>
      <Jumbotron id="profileJumbotron">
        <h4 id="profileH4">{name}'s profile</h4>
      </Jumbotron>

      {user && (
        <MyProfileCompo
          id={user.id}
          address={user.address}
          email={user.email}
          name={user.name}
          phone={user.phone}
          token={user.token}
        />
      )}
    </div>
  );
}
