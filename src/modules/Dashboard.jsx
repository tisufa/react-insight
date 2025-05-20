import { useToast } from "../hooks";

export const Dashboard = () => {
  const toast = useToast();
  return (
    <div>
      <h2 className="font-medium">Dashboard</h2>
      <p>Hi, John Doe. Welcome back!</p>
      <button
        className="px-3 py-1 bg-amber-400 rounded-md shadow-sm mt-3 hover:bg-amber-500 cursor-pointer"
        onClick={() => toast.showSuccess("Welcome back!")}
      >
        Show Toast
      </button>
    </div>
  );
};
