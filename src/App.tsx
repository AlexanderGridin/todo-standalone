import { useEffect } from "react";

import { ProjectsPage } from "pages/ProjectsPage";
import { initAsync } from "services";

function App() {
	const init = async () => {
		const initMessage = await initAsync();
		console.log(initMessage);
	};

	useEffect(() => {
		init();
	}, []);

	return <ProjectsPage />;
}

export default App;
