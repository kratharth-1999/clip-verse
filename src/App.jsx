import { ToastContainer } from "react-toastify";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import { Analytics } from "@vercel/analytics/react";

function App() {
    return (
        <>
            <Provider store={store}>
                <Body />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Provider>
            <Analytics />
        </>
    );
}

export default App;
