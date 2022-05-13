import React, { useState } from "react";

export default function Input(props) {
   console.log(props);
   const [val, setVal] = useState("hello");
   return <input {...props} />;
}
