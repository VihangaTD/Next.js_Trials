import Button from "@/components/Button";
import React from "react";

export default function page({ params }) {
  const { username } = params;

  return (
    <>
      <h1>This is the user: {username}</h1>
      <Button />
    </>
  );
}
