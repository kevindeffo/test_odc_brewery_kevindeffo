
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Brewerie from "./pages/Brewerie";





const Main = (props) => {

    



	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element = {<App  />} />
				<Route path='/brewerie/:id' element={<Brewerie/>} />
				<Route path='/brewerie/'  element={<Brewerie/>}>
					<Route path='/brewerie/:id/' element={<Brewerie/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
