import React, { useState } from 'react'
import '../css/calendar.css'
import Arrow from '../pict/arrow.svg'

const Calendar = () => {
  const [activeTab, setActiveTab] = useState('future'); // 'future' або 'past'

  return (
    <section className='calendar'>
      <h2 className='calendar__title'>Календар подій</h2>
      <div className='calendar__container'>
        <div className='calendar__btns'>
          <button 
            className={`calendar__tab-btn ${activeTab === 'future' ? 'active' : ''}`} 
            onClick={() => setActiveTab('future')}
            style={activeTab === 'future' ? { textDecoration: 'underline' } : {}}
          >
            Майбутні події
          </button>
          <button 
            className={`calendar__tab-btn ${activeTab === 'past' ? 'active' : ''}`} 
            onClick={() => setActiveTab('past')}
            style={activeTab === 'past' ? { textDecoration: 'underline' } : {}}
          >
            Минулі події
          </button>
        </div>
        <div className='calendar__events'>
          {activeTab === 'future' && (
            <>
              <div className='calendar__event'>
                <div className='calendar__event-info'>
                  <div className='calendar__event-title'>Етичні стандарти лобіювання:<br />рекомендації Асоціації</div>
                  <div className='calendar__event-date'><span>10.05.2026</span></div>
                </div>
                <div className='calendar__event-btn'>
                  <button className='police-btn'><img src={Arrow} alt="" /> </button>
                </div>
              </div>
              <div className='calendar__event'>
                <div className='calendar__event-info'>
                  <div className='calendar__event-title'>Етичні стандарти лобіювання:<br />рекомендації Асоціації</div>
                  <div className='calendar__event-date'><span>10.05.2026</span></div>
                </div>
                <div className='calendar__event-btn'>
                  <button className='police-btn'><img src={Arrow} alt="" /> </button>
                </div>
              </div>
              <div className='calendar__event'>
                <div className='calendar__event-info'>
                  <div className='calendar__event-title'>Етичні стандарти лобіювання:<br />рекомендації Асоціації</div>
                  <div className='calendar__event-date'><span>10.05.2026</span></div>
                </div>
                <div className='calendar__event-btn'>
                  <button className='police-btn'><img src={Arrow} alt="" /> </button>
                </div>
              </div>
            </>
          )}
          {activeTab === 'past' && (
            <>
              <div className='calendar__event'>
                <div className='calendar__event-info'>
                  <div className='calendar__event-title'>Етичні стандарти лобіювання:<br />рекомендації Асоціації</div>
                  <div className='calendar__event-date'><span>10.05.2025</span></div>
                </div>
                <div className='calendar__event-btn'>
                  <button className='police-btn'><img src={Arrow} alt="" /> </button>
                </div>
              </div>
              <div className='calendar__event'>
                <div className='calendar__event-info'>
                  <div className='calendar__event-title'>Етичні стандарти лобіювання:<br />рекомендації Асоціації</div>
                  <div className='calendar__event-date'><span>10.05.2025</span></div>
                </div>
                <div className='calendar__event-btn'>
                  <button className='police-btn'><img src={Arrow} alt="" /> </button>
                </div>
              </div>
              <div className='calendar__event'>
                <div className='calendar__event-info'>
                  <div className='calendar__event-title'>Етичні стандарти лобіювання:<br />рекомендації Асоціації</div>
                  <div className='calendar__event-date'><span>10.05.2025</span></div>
                </div>
                <div className='calendar__event-btn'>
                  <button className='police-btn'><img src={Arrow} alt="" /> </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Calendar