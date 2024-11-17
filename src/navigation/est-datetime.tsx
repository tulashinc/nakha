import { useEffect, useState } from 'react'

function EstDateTime() {
	const newDate = new Date().toLocaleTimeString('en-us', {
		timeZone: 'America/New_York',
	})

	const [estTime, setEstTime] = useState(newDate)

	const nyDate = new Date().toLocaleDateString('en-us', {
		timeZone: 'America/New_York',
	})

	// const week_Day = new Date(nyDate).getDay()
	// const dayOfWeek = [
	// 	'Sunday',
	// 	'Monday',
	// 	'Tuesday',
	// 	'Wednesday',
	// 	'Thursday',
	// 	'Friday',
	// 	'Saturday',
	// ]
	const weekday = new Date().toLocaleDateString('en-us', { weekday: 'long' })

	useEffect(() => {
		const id = tickTime()
		return () => clearTimeout(id)
	}, [])

	const tickTime = () => {
		return setInterval(() => {
			setEstTime(() =>
				new Date().toLocaleTimeString('en-us', { timeZone: 'America/New_York' })
			)
		}, 1000)
	}

	return (
		<div>
			{/* {dayOfWeek[week_Day]}, {nyDate} */}
			{weekday}, {nyDate}
			<br />
			USA EST: {estTime}
		</div>
	)
}

export default EstDateTime
