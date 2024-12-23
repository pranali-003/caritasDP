// // requirements stautus (graphs) - shreya
// import React from 'react'

// const RequirementStatus = () => {
//   const containerStyle = {
//     backgroundColor: '#F7F7F7',
//     padding: '10px',
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     width: '100%',
//     margin: '0 auto',
//   };

//   const headingStyle = {
//     marginBottom: '20px',
//     fontSize: '24px',
//     fontWeight: 'bold',
//     color: '#005fa3',
//   };

//   const chartContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   const chartItemStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '130px',
//   };

//   const labelStyle = {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//     backgroundColor: '#b1dcf8 ',
//     padding: '5px',
//     borderRadius: '5px',
//     width: '100%',
//     textAlign: 'center',
//     color: 'white'
//   };

//   const circleStyle = {
//     position: 'relative',
//     width: '100px',
//     height: '100px',
//   };

//   const svgStyle = {
//     width: '100%',
//     height: '100%',
//     transform: 'rotate(-90deg)',
//   };

//   const bgStyle = {
//     fill: 'none',
//     strokeWidth: '15',
//     stroke:'#FFFFFF',
//   };

//   const progressStyle = (offset, strokeColor) => ({
//     fill: 'none',
//     strokeWidth: '15',
//     strokeLinecap: 'round',
//     strokeDasharray: '251.2',
//     strokeDashoffset: offset,
//     stroke: strokeColor,
//   });

//   const percentageStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     fontSize: '20px',
//     fontWeight: 'bold',
//     color: '#000',
//   };

//   return (
//     <div style={containerStyle}>
//       <h2 style={headingStyle}>Requirement Status:</h2>
//       <hr />
//       <div style={chartContainerStyle}>
//         <div style={chartItemStyle}>
//           <div style={labelStyle}>Clothing</div>
//           <div style={circleStyle}>
//             <svg style={svgStyle}>
//               <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
//               <circle cx="50" cy="50" r="40" style={progressStyle('0', '#e57dfd ')}></circle>
//             </svg>
//             <div style={percentageStyle}>100%</div>
//           </div>
//         </div>

//         <div style={chartItemStyle}>
//           <div style={labelStyle}>Groceries</div>
//           <div style={circleStyle}>
//             <svg style={svgStyle}>
//               <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
//               <circle cx="50" cy="50" r="40" style={progressStyle('10', '#005fa3')}></circle>
//             </svg>
//             <div style={percentageStyle}>80%</div>
//           </div>
//         </div>

//         <div style={chartItemStyle}>
//           <div style={labelStyle}>Stationaries</div>
//           <div style={circleStyle}>
//             <svg style={svgStyle}>
//               <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
//               <circle cx="50" cy="50" r="40" style={progressStyle('0', '#e57dfd')}></circle>
//             </svg>
//             <div style={percentageStyle}>60%</div>
//           </div>
//         </div>

//         <div style={chartItemStyle}>
//           <div style={labelStyle}>Miscellaneous</div>
//           <div style={circleStyle}>
//             <svg style={svgStyle}>
//               <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
//               <circle cx="50" cy="50" r="40" style={progressStyle('360', '#005fa3')}></circle>
//             </svg>
//             <div style={percentageStyle}>40%</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RequirementStatus
import React from 'react';

const RequirementStatus = () => {
  const containerStyle = {
    backgroundColor: '#F7F7F7',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    margin: '0 auto',
  };

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#005fa3',
  };

  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const chartItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '130px',
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#b1dcf8 ',
    padding: '5px',
    borderRadius: '5px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  };

  const circleStyle = {
    position: 'relative',
    width: '100px',
    height: '100px',
  };

  const svgStyle = {
    width: '100%',
    height: '100%',
    transform: 'rotate(-90deg)',
  };

  const bgStyle = {
    fill: 'none',
    strokeWidth: '15',
    stroke: '#FFFFFF',
  };

  const progressStyle = (offset, strokeColor) => ({
    fill: 'none',
    strokeWidth: '15',
    strokeLinecap: 'round',
    strokeDasharray: '251.2',
    strokeDashoffset: offset,
    stroke: strokeColor,
  });

  const percentageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Requirement Status:</h2>
      <hr />
      <div style={chartContainerStyle}>
        <div style={chartItemStyle}>
          <div style={labelStyle}>Clothing</div>
          <div style={circleStyle}>
            <svg style={svgStyle}>
              <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
              <circle cx="50" cy="50" r="40" style={progressStyle('251.2', '#e57dfd')}></circle>
            </svg>
            <div style={percentageStyle}>0%</div>
          </div>
        </div>

        <div style={chartItemStyle}>
          <div style={labelStyle}>Groceries</div>
          <div style={circleStyle}>
            <svg style={svgStyle}>
              <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
              <circle cx="50" cy="50" r="40" style={progressStyle('225.08', '#005fa3')}></circle>
            </svg>
            <div style={percentageStyle}>10%</div>
          </div>
        </div>

        <div style={chartItemStyle}>
          <div style={labelStyle}>Stationaries</div>
          <div style={circleStyle}>
            <svg style={svgStyle}>
              <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
              <circle cx="50" cy="50" r="40" style={progressStyle('251.2', '#e57dfd')}></circle>
            </svg>
            <div style={percentageStyle}>0%</div>
          </div>
        </div>

        <div style={chartItemStyle}>
          <div style={labelStyle}>Miscellaneous</div>
          <div style={circleStyle}>
            <svg style={svgStyle}>
              <circle cx="50" cy="50" r="40" style={bgStyle}></circle>
              <circle cx="50" cy="50" r="40" style={progressStyle('251.2', '#005fa3')}></circle>
            </svg>
            <div style={percentageStyle}>0%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementStatus;
