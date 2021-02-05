import "./App.css";
import Results from "./components/Results/Results";
import SearchBar from "./components/SearchBar/SearchBar";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <SearchBar />
                <div className="app__body">
                    <Results />
                </div>
            </div>
        </Provider>
    );
}

export default App;
