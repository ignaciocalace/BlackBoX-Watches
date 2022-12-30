import React from "react";
import "/src/components/BrandName/BrandName.css";
import Stack from "react-bootstrap/Stack";

const BrandName = () => {
  return (
    <div>
      <Stack direction="horizontal" gap={3}>
        <img
          className="img-fluid image"
          src="/assets/bbox.png"
          alt="BrandLogo"
        />
        <h2>BlackBoX</h2>
      </Stack>
    </div>
  );
};

export default BrandName;
