import React, { useEffect, useState } from "react";

const Second = () => {
    const [seg, setSeg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeg(prevSeg => prevSeg === 9 ? 0 : prevSeg + 1);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

  return (
    <p className="counter">{seg}</p>

  )
}

export default Second