import { useEffect, useState } from "react";
const App = () => {
  // using the useState to update the hour, minute and second
  const [hrDegree, setHrDegree] = useState("0");
  const [minDegree, setMinDegree] = useState("0");
  const [secDegree, setSecDegree] = useState("0");
  // set interval to update the real time data in the dom
  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let hr = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      let hrRotation = hr * 30 + min / 2;
      let minRotation = min * 6;
      let secRotation = sec * 6;

      setHrDegree(hrRotation);
      setMinDegree(minRotation);
      setSecDegree(secRotation);
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    // creating a wrapper div to wrpa whole code inside that
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
      {/* creating the clock div */}
      <div className="clock w-96 h-96 rounded-[50%] border flex items-center justify-center relative bg-gray-500 boxShadow">
        {/* div for hour hand */}
        <div style={{transform:`rotate(${hrDegree}deg)`}} className="bg-red-500 h-16 w-1 absolute z-10 origin-bottom top-[33%] rounded-[50%]"></div>

        {/* div for minute hand */}
        <div style={{transform:`rotate(${minDegree}deg)`}} className="bg-blue-500 h-[5rem] w-1 absolute z-20 origin-bottom top-[29%] rounded-[50%]"></div>

        {/* div for second hand */}
        <div style={{transform:`rotate(${secDegree}deg)`}} className=" bg-green-500 h-24 w-1 absolute z-30 origin-bottom top-[25%] rounded-[50%]"></div>

        {/* div for circular dot in center of clock */}
        <div className="w-4 h-4 bg-black rounded-[50%] absolute z-40"></div>
      </div>
    </div>
  );
}

export default App;