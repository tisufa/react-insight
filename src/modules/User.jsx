import { useToast } from "../hooks";

export const User = () => {
  const toast = useToast();
  return (
    <div>
      <h2 className="font-medium">User</h2>
      <p>My user page is works!</p>
      <button
        className="px-3 py-1 bg-amber-400 rounded-md shadow-sm mt-3 hover:bg-amber-500 cursor-pointer"
        onClick={() => toast.showSuccess("User has been created successfully")}
      >
        Show Toast
      </button>
    </div>
  );
};
