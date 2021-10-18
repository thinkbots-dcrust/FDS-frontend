import axios from "./axios";
import { css } from 'styled-components';

axios
	.get("/isServerRunning")
	.then((res) => {
		console.log(res.data);
	})
	.catch((err) => {
		console.error(err);
	});

export { axios };

// Media queries Styled-Components
const sizes = {
	tablet: 768,
	mobile: 767.98
};

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label]}px) {
			${css(...args)};
		}
	`;
	return acc;
}, {});
