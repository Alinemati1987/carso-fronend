import React, { useState } from "react";
import { Container, FormGroup } from "react-bootstrap";

export default function Cloudinary() {
  const [image, setImage] = useState();

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);

    data.append("upload_preset", "lm740pks");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkdzt4lca/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    console.log("file", file);
    setImage(file.url);
  };
  return (
    <div>
      <Container>
        <h1>Uploading Your file</h1>
        <FormGroup>
          <input
            type="file"
            name="file"
            placeholder="Upload somthing"
            onChange={uploadImage}
          />
        </FormGroup>
      </Container>
    </div>
  );
}
