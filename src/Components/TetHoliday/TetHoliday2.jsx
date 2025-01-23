import React from 'react'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './TetHoliday.css'
import { RandomQuotesButton } from '../RandomQuotes/RandomQuotesButton';

const COUNTDOWN_TARGET = new Date('January 29 2025 00:00:00'); //LunarNewYear

export function TetHoliday2() {
  return (
    <div className='countdown_container'>
      <RandomQuotesButton/>
      <div className='background'>
        <div className='countdown_text'>
          <h1> ĐẾM NGƯỢC</h1>  
          <h1> TẾT NGUYÊN ĐÁN 2025</h1>
        </div>
        
        <FlipClockCountdown className='countdown'
        to={COUNTDOWN_TARGET}
        labels={['Ngày', 'Giờ', 'Phút', 'Giây']}
        labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase' }}
        digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
        dividerStyle={{ color: 'white', height: 0.5 }}
        separatorStyle={{ color: 'grey', size: '6px' }}
        duration={0.5}
      >
        Finished
      </FlipClockCountdown>
      </div>
      
  </div>
  )
}
