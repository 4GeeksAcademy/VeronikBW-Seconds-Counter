import React, { useEffect, useState } from "react";

const Sixth = () => {
    const [seg, setSeg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeg(prevSeg => prevSeg === 9 ? 0 : prevSeg + 1);
        }, 100000000);
        return () => clearInterval(interval);
    }, []);

  return (
    <p className="counter">{seg}</p>

  )
}

export default Sixth