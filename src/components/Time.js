import React, { useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import {
	TimeContainer,
	CurrentTime,
	Typography,
	MonthYearContainer,
	LeftColumn,
	ColumnContainer,
	DateContainer,
	RightColumn,
	TimeContent,
	IconContainer
} from './time.styles';

const Time = () => {
	const dayOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	const monthOfYear = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

	const [ date, setDate ] = useState(new Date().getDate());
	const [ day, setDay ] = useState(dayOfWeek[new Date().getDay()]);
	const [ month, setMonth ] = useState(monthOfYear[new Date().getMonth()]);
	const [ year, setYear ] = useState(new Date().getFullYear());
	const [ time, setTime ] = useState(new Date().toLocaleTimeString());

	const [ darkMode, setDarkMode ] = useState(false);

	const handleChangeToDarkMode = () => setDarkMode(() => !darkMode);

	setInterval(() => {
		setDay(() => dayOfWeek[new Date().getDay()]);
		setMonth(() => monthOfYear[new Date().getMonth()]);
		setDate(() => new Date().getDate());
		setYear(() => new Date().getFullYear());
		setTime(() => new Date().toLocaleTimeString());
	}, 1000);

	return (
		<React.Fragment>
			<TimeContainer>
				<ColumnContainer darkMode={darkMode}>
					<LeftColumn>
						<DateContainer>
							<h1>{date}</h1>
						</DateContainer>
						<MonthYearContainer>
							<h4>{month}</h4>
							<h4>{year}</h4>
						</MonthYearContainer>
					</LeftColumn>
					<RightColumn>
						<h4>{day}</h4>
					</RightColumn>
					<IconContainer onClick={handleChangeToDarkMode}>
						{darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
					</IconContainer>
				</ColumnContainer>
				<TimeContent darkMode={darkMode}>
					<Typography darkMode={darkMode}>Code.Eat.Lift</Typography>
					<CurrentTime darkMode={darkMode}>{time}</CurrentTime>
				</TimeContent>
			</TimeContainer>
		</React.Fragment>
	);
};

export default Time;
