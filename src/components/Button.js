function Button() {
  return (
    <div>
      <div className="h-12 w-screen">
        {" "}
        <button className="h-12 w-screen items-stretch md:items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex">
          Send Money
        </button>
      </div>

      <div className="h-12 w-screen">
        {" "}
        <button className="h-12 w-screen items-stretch md:items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex">
          Withdraw
        </button>
      </div>
      <div className="h-12 w-screen">
        {" "}
        <button className="h-12 w-screen items-stretch md:items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex">
          Deposit
        </button>
      </div>
    </div>
  );
}

export default Button;
