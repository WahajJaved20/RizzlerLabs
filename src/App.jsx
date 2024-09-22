import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditorialPage from "./Components/EditorialPage"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blogs" element={<Blogs />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NoPage />} />
				</Route> */}
				<Route path="/" element={<EditorialPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
