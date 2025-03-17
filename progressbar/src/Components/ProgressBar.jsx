import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(0, value)));
  }, [value]);

  //   console.log(percentage);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[500px] h-[40px] m-auto border-2 bg-gray-400 rounded-2xl flex items-center justify-center overflow-hidden">
        <span
          className="w-full h-full"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percentage}
          style={{
            background: `linear-gradient(to right, red ${percentage}%, yellow ${percentage}% 100%)`,
          }}
        >
          {percentage.toFixed()}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
