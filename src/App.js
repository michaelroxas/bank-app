import Header from "./components/Header";
import ButtonSendMoney from "./components/ButtonSendMoney";
import ButtonWithdraw from "./components/ButtonWithdraw";
import ButtonDeposit from "./components/ButtonDeposit";
// import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <div className="bg-blue-200">
      <Header />
      <ButtonSendMoney />
      <ButtonWithdraw />
      <ButtonDeposit />
      {/* <TransactionHistory /> */}
    </div>
  );
}

export default App;
