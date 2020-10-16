import React, { useState } from 'react';
import bg_graphic from './bg_graphic.png';
import Header from './Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import Scheduler from './Scheduler';

const roomId = '001';
function App() {
	const [ date, setDate ] = useState(new Date());
  const [ time, setTime ] = useState('09:00');


  console.log(time);

	const onChange = (date) => setDate(date);
	const day = JSON.stringify(date.getDate());
	const month = date.toLocaleString('default', { month: 'long' });
	const year = JSON.stringify(date.getFullYear());

	return (
		<div className="App">
			<Header />
			<div className="app__content">
				<div className="calendar__container">
					<h4>Select a date</h4>
					<Calendar
						calendarType="US"
						nextLabel="&rarr;"
						prevLabel="&larr;"
						next2Label={null}
						prev2Label={null}
						onChange={onChange}
						value={date}
					/>

					<div className="time__select">
						<h4>
							Select a time for {day} {month}, {year}
						</h4>
						<input className="time-picker" type="time" onChange={(time) => setTime(time)} value={time} />
					</div>
				</div>

				<div className="scheduler">
					<Scheduler />
				</div>

				<div className='app__content__right'>
					<img className="bg_graphic" src={bg_graphic} alt="bg_graphic" />

					<div className="sharing__links">
						<div className="sharing__main">
							<div onClick={() => alert(`Share this link with whom?`)} className="sharing__button">
								<div className="sharing__main__inside">
									Share Meeting Link
									<img src="https://img.icons8.com/color/32/000000/whatsapp.png" />
								</div>
							</div>
							<div
								onClick={() => alert(`Well you just copied a url, ${window.location.href}`)}
								className="sharing__button"
							>
								<div className="sharing__main__inside">
									Copy Meeting Link
									<img src="https://img.icons8.com/ios-glyphs/30/656bdf/copy.png" />
								</div>
							</div>
						</div>
					</div>

          <div className='lower__section'>
            <a className='button__meeting' href={`/${roomId}`}>
              Host a meeting
            </a>
          </div>
				</div>
			</div>
		</div>
	);
}

export default App;
