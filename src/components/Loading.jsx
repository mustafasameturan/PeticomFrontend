import React, { useState, useEffect } from "react";

const Loading = (props) => {
  
  const { showText } = props;

  return (
    <div className={`flex items-center justify-center mt-1 ${typeof showText !== undefined ? "gap-1" : ""}`}>
      <div className="inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-orange border-current border-r-transparent align-[-0.25em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p>
        {typeof showText === "undefined" ? " Yükleniyor..." : ""}
      </p>
    </div>
  );
};

export default Loading;