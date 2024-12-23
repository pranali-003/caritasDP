import React from 'react';
import boy from '../../assets/boy.png'
import woman from '../../assets/woman.png'
import hacker from '../../assets/hacker.png'
import man from '../../assets/man.png'
import gamer from '../../assets/gamer.png'


const NgoCollection = () => {
  return (
    <div className="p-3 d-flex flex-column justify-content-between h-100" style={{ backgroundColor: '#F7F7F7', borderRadius: '15px' }}>
      {/* Amount Collected */}
      <div className="text-center mb-3">
        <h5 style={{color:'#005fa3'}}>You have collected:</h5>
        <h2 className=" text-white px-4 py-2 rounded-pill" style={{background:'#005fa3'}}>$ 3000</h2>
      </div>

      {/* Monthly Stats */}
      <div className="d-flex justify-content-between mb-3">
        <span  style={{ color: '#C86FD7' }}>This Month: $2000</span>
        <span style={{ color: '#C86FD7'}}>Past Month: $1000</span>
      </div>

      {/* Divider */}
      <hr/>

      {/* User Avatars */}
      <div className="d-flex mb-3">
        
        <div className="d-flex justify-content-start">
        <span>
          <img src={boy} style={{width:'35px', height:'35px'}}className="rounded-circle me-2" alt="Avatar 1" />
          <img src={gamer} style={{width:'35px', height:'35px'}}className="rounded-circle me-2" alt="Avatar 2" />
          <img src={man} style={{width:'35px', height:'35px'}} className="rounded-circle me-2" alt="Avatar 3" />
          <img src={hacker} style={{width:'35px', height:'35px'}}className="rounded-circle me-2" alt="Avatar 4" />
          <img src={woman} style={{width:'35px', height:'35px'}} className="rounded-circle" alt="Avatar 5" />
           {/* View More Button */}
            <button className="btn btn-primary " style={{ backgroundColor: '#D26DF2', borderColor: '#D26DF2' ,width:'110px',height:'30px', marginLeft:'5px' }}>View More</button>
          </span>
        </div>
      </div>

     
    </div>
  );
};

export default NgoCollection;
