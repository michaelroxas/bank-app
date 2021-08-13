function Header() {
  return (
    <div className="p-5 bg-blue-200">
      <h1 className="text-gray 900">Hello,</h1>
      <h2 className="font-bold mb-2 text-xl text-gray-800">Creed Bratton!</h2>
      <div className="bg-white p-5 rounded-2xl shadow-lg w-full md:w-1/2 mx-auto text-left">
        <p className="text-gray-700">Balance</p>
        <p className="text-2xl text-gray-700 text-center font-bold m-2">
          PHP 1,000.00
        </p>
      </div>
    </div>
  );
}

export default Header;
