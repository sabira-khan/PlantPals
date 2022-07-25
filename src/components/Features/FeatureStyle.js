import styled from 'styled-components';

export const FeatureSection = styled.div`
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 25%, rgba(64,242,135,1) 74%, rgba(75,189,140,1) 100%);
	padding: 70px 140px;
	position: relative;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		padding: 70px 0;
		margin-top: 10rem;
	}
`;


export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	&:before {
		width: 40px;
		height: 2px;
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: #006666;
		transform: translateX(-50%);
	}
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/* flex-wrap: wrap; */
	margin-top: 4rem;
	grid-gap: 4rem;
	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.4rem;
		grid-row-gap: 3rem;
		/* grid-gap: 3rem; */
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled.div`
	/* max-width: 33%; */
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 960px) {
		/* max-width: 50%; */
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
    box-shadow: 5px 5px 5px teal;
	&.one {
        background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
		
	}
	&.two {
		background: linear-gradient(220deg, #e7d1ff 0%, #8383ef 100%);
	}
	&.three {
		background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
	}
	&.four {
		background: linear-gradient(130deg, #ffa8e8 0%, #ffe6e6 100%);
	}
	&.five {
		background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
	}
	&.six {
		background: linear-gradient(130deg, #9cb3ff 0%, #b0ffe9 100%);
	}
	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.4rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 1rem;
	line-height: 1.73;
	letter-spacing: 0.4px;
	color: #001933;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;