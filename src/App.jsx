import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <h1 className="text-red-500">Clip Verse</h1>
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
        </>
    );
}

export default App;
