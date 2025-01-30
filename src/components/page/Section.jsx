import React from "react";
import SpaceWarp from "./SpaceWarp";

const Section = React.forwardRef(({children, background}, ref) => {
  return (
    <div ref={ref} style={{background:background}} className="w-screen h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
})

export default Section
