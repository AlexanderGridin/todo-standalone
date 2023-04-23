import { useEffect } from "react";
import { Page } from "./components/Page";
import { initAsync } from "./services";
import { toWayTestAsync } from "./services/toWayTest";

function App() {
	const init = async () => {
		const initMessage = await initAsync();
		console.log(initMessage);

		const rendererMessage = "Renderer message";
		console.log(rendererMessage);
		const mainMessage = await toWayTestAsync(rendererMessage);
		console.log(mainMessage);
	};
	useEffect(() => {
		init();
	}, []);
	return <Page title="Projects" />;
}

export default App;
