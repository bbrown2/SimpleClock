import styled from 'styled-components';
import { Container, device } from '../globalStyles';

export const TimeContainer = styled(Container)`
	height: 100vh;
    text-align: center;
	min-width: 250px;
	overflow-x: hidden;
	padding: 0 15px;

`;

export const ColumnContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	background-color: ${({ darkMode }) => (darkMode ? '#444' : '#222')};
	padding: 10px 0;
	min-width: 250px;

	@media ${device.laptop} {
		padding: 25px 0;
	}
`;

export const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: auto;

	@media ${device.laptop} {
		align-items: flex-end;
	}
`;

export const DateContainer = styled.div`
	h1 {
		font-size: 50px;
		font-weight: 300;
		color: deepskyblue;

		@media ${device.tablet} {
			font-size: 70px;
		}

		@media ${device.laptop} {
			font-size: 150px;
		}
	}
`;

export const MonthYearContainer = styled.div`
	h4 {
		font-size: 20px;
		font-weight: 300;
		color: #fafafa;

		@media ${device.laptop} {
			font-size: 40px;
		}
	}
`;

export const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	/* flex: 1; */
	padding: 0 10px;
	color: #fafafa;

	@media ${device.laptop} {
		padding: 0 50px;
	}

	h4 {
		font-size: 25px;
		font-weight: 300;

		@media ${device.tablet} {
			font-size: 50px;
		}

		@media ${device.laptop} {
			font-size: 100px;
		}
	}
`;

export const TimeContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 200px;
	background-color: ${({ darkMode }) => (darkMode ? '#222' : null)};
	width: inherit;
	min-width: 250px;

	@media ${device.tablet} {
		flex-direction: row;
		height: 350px;
	}

	@media ${device.laptop} {
		height: 500px;
	}
	/*  */
`;

export const CurrentTime = styled.h1`
	font-size: 30px;
	font-weight: bold;
	padding: 0 15px;
	color: ${({ darkMode }) => (darkMode ? '#fafafa' : null)};
	min-width: inherit;

	@media ${device.tablet} {
		font-size: 50px;
	}

	@media ${device.laptop} {
		font-size: 150px;
	}
`;

export const Typography = styled(CurrentTime)`

	font-weight: 300;
    padding: 15px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
	width: inherit;

	
	@media ${device.laptop} {
	font-size: 75px;
    height: inherit;

	}
    

`;

export const IconContainer = styled.div`
	position: relative;
	align-self: center;
	font-size: 15px;
	color: deepskyblue;
	right: 0;
	top: 0;
	padding: 5px;
	cursor: pointer;

	:hover {
		color: #fafafa;
	}

	@media ${device.laptop} {
		font-size: 30px;
		right: 20px;
	}

	/*  */
`;
