import axios from "./axios";

axios
	.get("/isServerRunning")
	.then((res) => {
		console.log(res.data);
	})
	.catch((err) => {
		console.error(err);
	});

export { axios };
