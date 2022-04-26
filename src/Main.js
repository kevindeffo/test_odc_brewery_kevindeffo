
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Brewerie from "./pages/Brewerie";
import Home from "./pages/Home";





const Main = (props) => {

    



	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element = {<Home  />} />
				<Route path='/brewerie/:id' element={<Brewerie/>} />
				<Route path='/brewerie/'  element={<Brewerie/>}>
					<Route path='/brewerie/:id/' element={<Brewerie/>} />
				</Route>
				<Route path="/test" element = {<App/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
