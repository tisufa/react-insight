import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-slate-100">
      <div className="max-w-1/2 w-full grid gap-3">
        <h1 className="text-2xl font-semibold text-center">
          React Toast Insight
        </h1>
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-lime-500 font-medium" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                isActive ? "text-lime-500 font-medium" : ""
              }
            >
              User
            </NavLink>
          </li>
        </ul>
        <div className="bg-white shadow-sm min-h-[200px] p-3 rounded-lg relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
