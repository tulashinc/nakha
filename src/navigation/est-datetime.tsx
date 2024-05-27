import { useEffect, useState } from 'react'

function EstDateTime() {
	const [estTime, setEstTime] = useState(
		new Date().toLocaleTimeString('en-us', { timeZone: 'America/New_York' })
	)

	const nyDate = new Date().toLocaleDateString('en-us', {
		timeZone: 'America/New_York',
	})

	const week_Day = new Date(nyDate).getDay()
	const dayOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]

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
		<div className="p-2">
			{dayOfWeek[week_Day]}, {nyDate}
			<br />
			USA EST: {estTime}
		</div>
	)
}

export default EstDateTime
