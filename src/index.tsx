import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context";
import { App } from "./App";

import "./style/reset.scss";
import "./style/_theme.scss";
import "./style/_variables.scss";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<AppProvider>
			<Toaster position="top-center" reverseOrder={false} />
			<App />
		</AppProvider>
	</React.StrictMode>,
);

reportWebVitals();
