import { useState } from "react";

function Header() {
  const [balance, setBalance] = useState(1000);

  return (
    <div>
      <div className="p-5 ">
        <h1 className="text-gray 900">Hello,</h1>
        <h2 className="font-bold mb-2 text-xl text-gray-800">User!</h2>
        <div className="bg-white p-5 rounded-2xl shadow-lg w-1/2 md:w-1/4 mx-auto text-left">
          <p className="text-gray-700">Balance</p>
          <p className="text-2xl text-gray-700 text-center font-bold m-2">
            {balance}
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center p-5 space-x-5">
        <button
          onClick={() => setBalance(balance - 1000)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-52"
          type="submit"
        >
          Send Money
        </button>

        <button
          onClick={() => setBalance(balance - 1000)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-52"
        >
          Withdraw
        </button>

        <button
          onClick={() => setBalance(balance + 1000)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center w-52"
        >
          Deposit
        </button>
      </div>
    </div>
  );
}

export default Header;
