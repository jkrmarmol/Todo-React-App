import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
    return (
        <div className="body">
            <Provider store={store}>
                <Todo />
            </Provider>
            <Footer />
        </div>
    );
}

export default App;
