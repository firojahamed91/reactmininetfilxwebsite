import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Demo = () => {
    return (
        <div>
            

{/* const UrgeWithPleasureComponent = () => ( */}
  <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
{/* ) */}
        </div>
    )
}

export default Demo


// import React from 'react'
// import Clock from 'react-digital-clock';
// import Countdown from 'react-countdown';
// import './Demo.css'

// const Demo = () => {
// //     // Random component
// // const Completionist = () => <span>You are good to go!</span>;

// // // Renderer callback with condition
// // const renderer = ({ hours, minutes, seconds, completed }) => {
// //   if (completed) {
// //     // Render a completed state
// //     return <Completionist />;
// //   } else {
// //     // Render a countdown
// //     return <span>{hours}:{minutes}:{seconds}</span>;
// //   }
// // };
//     return (
//         <div className="display-1 bal ">
//             <h1 className="bal "> <Clock  /></h1>
//             <Countdown 
//             date={Date.now() + 10000000}
//             // renderer={renderer}
//             />
//         </div>
//     )
// }

// export default Demo
