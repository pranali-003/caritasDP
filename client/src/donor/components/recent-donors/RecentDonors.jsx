import React from 'react'
import './recent-donor.css'
import data from './donor.json'
import RectangleCard from '../rectangle-card/RectangleCard'
const RecentDonors = () => {
  return (
    <>
    <h2 className="recent-heading">Recent Donors</h2>
      <div className='recent-donor-section'>

        {data.map((ngo,key) => (
            <RectangleCard
              key={ngo.id}
              image={ngo.image}
              title={ngo.ngoName}
              subtitle={ngo.description}
              additionalInfo={ngo.additionalInfo}
            />
          ))}
      </div>
    </>
  )
}

export default RecentDonors
