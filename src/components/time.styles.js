import styled from 'styled-components';
import { Container, device } from '../globalStyles';

export const TimeContainer = styled(Container)`
	height: 100vh;
    text-align: center;
	min-width: 250px;


`;

export const ColumnContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	background-color: ${({ darkMode }) => (darkMode ? '#444' : '#222')};
	padding: 25px 0;
	min-width: 250px;
`;

export const CurrentTime = styled.h1`
	font-size: 50px;
	font-weight: bold;
	padding: 0 15px;
	color: ${({ darkMode }) => (darkMode ? '#fafafa' : null)};

	@media ${device.laptop} {
		font-size: 150px;
	}
`;

export const Typography = styled(CurrentTime)`

	font-weight: 300;
    padding: 0 15px;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
	width: inherit;

	
	@media ${device.laptop} {
	font-size: 75px;
	}
    

`;

export const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	width: 400px;
`;

export const DateContainer = styled.div`
	h1 {
		font-size: 50px;
		font-weight: 300;
		color: deepskyblue;

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
	flex: 1;
	padding: 0 50px;
	color: #fafafa;

	h4 {
		font-size: 50px;
		font-weight: 300;

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
	height: 250px;
	background-color: ${({ darkMode }) => (darkMode ? '#222' : null)};

	@media ${device.laptop} {
		flex-direction: row;
		height: 500px;
	}
	/*  */
`;

export const IconContainer = styled.div`
	position: relative;
	align-self: center;
	font-size: 30px;
	color: deepskyblue;
	right: 20px;
	cursor: pointer;

	:hover {
		color: #fafafa;
	}
	/*  */
`;
