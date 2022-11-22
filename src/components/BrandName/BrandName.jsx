import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const BrandName = () => {
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <img
          className="img-fluid w-25"
          src="./../src/assets/bbox.png"
          alt="BrandLogo"
        />

        <h2>BlackBoX</h2>
      </Stack>
    </div>
  );
};

export default BrandName;
