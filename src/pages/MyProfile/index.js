import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProfileCompo from "../../components/MyProfile";
import { selectUser } from "../../store/user/selectors";
import "./profile.css";

export default function MyProfile() {
  const User = useSelector(selectUser);

  console.log("user in profile is", User);

  return (
    <div>
      <Jumbotron id="profileJumbotron">
        <h4 id="forh4Profile">My profile</h4>
        <ProfileCompo
          id={User.id}
          address={User.address}
          email={User.email}
          name={User.name}
          phone={User.phone}
          token={User.token}
        />
      </Jumbotron>
    </div>
  );
}
