import React from 'react'
import './Styles.css'
import { useState } from 'react'

const DashboardCard = ({ obj, isSelect, Icon, iconColor, handleSelect, textColor }) => {
   const [timeframe, setTimeframe] = useState("today");
  return (
    <div className='dashboard-card-container' >
      <div className='dashboard-card-header'>
       <div className='icon-container' style={{backgroundColor: iconColor}}>
        <Icon />
       </div>
        {isSelect &&
          <div className="dashboard-card-select" >
            <select onChange={(e) => setTimeframe(e.target.value)} value={timeframe}>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        }
      </div>
      <div className='dashboard-card-body'>
        {obj?.map((item, indx) => (
          <div className='dashboard-card-inner' key={`${item}-${indx}` } style={{ width: `${100 / obj.length}%` }}>
            {/* <div style={{gap: '1rem'}}> */}
              <span className='paragraph1' style={{color: textColor}}>{item?.param}</span>
              <span className='sub-heading3'>{item?.value}</span>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardCard