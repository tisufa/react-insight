import { useEffect } from "react";
import "./App.css";
import { useApp } from "./hooks/useApp";

function App() {
  const state = useApp({
    name: null,
    email: null,
  });

  useEffect(() => {
    setTimeout(() => {
      state.setModel({ name: "John Doe", email: "johndoe@gmail.com" });
      state.setStateReady();
    }, 2000);
  }, []);

  const handleSubmit = () => {
    state.setStateProcessing();
    setTimeout(() => {
      state.setStateReady();
    }, 2000);
  };

  const createLoader = () => {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-slate-100">
      <div className="max-w-1/2 w-full grid gap-3">
        <h1 className="text-2xl font-semibold text-center">
          React Custom Hooks
        </h1>
        <div className="bg-white shadow-sm min-h-[200px] p-3 rounded-lg relative">
          {state.isLoading ? (
            <div className="flex items-center justify-center h-full">
              {createLoader()}
            </div>
          ) : (
            <div>
              {state.isProcessing && (
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 flex items-center justify-center">
                  {createLoader()}
                </div>
              )}
              <div className="grid gap-2">
                <h2 className="text-md font-semibold mb-1">User Detail</h2>
                <div className="text-sm grid grid-cols-[50px_max-content_1fr] gap-3">
                  <span>Name</span>
                  <span>:</span>
                  <span>{state.model.name}</span>
                </div>
                <div className="text-sm grid grid-cols-[50px_max-content_1fr] gap-3">
                  <span>Email</span>
                  <span>:</span>
                  <span>{state.model.email}</span>
                </div>
                <button
                  className="px-3 py-1 bg-lime-500 shadow-sm rounded-md mt-3 cursor-pointer"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
