export default function BalanceSummary() {
  const income = 5000;
  const expense = 2000;
  const balance = income - expense;

  return (
    <div className="border rounded-lg p-5 mb-5 shadow">
      <h2 className="text-2xl font-bold mb-4">Balance Summary</h2>

      <p className="text-green-600 font-semibold">Income: Rs. {income}</p>

      <p className="text-red-600 font-semibold">Expense: Rs. {expense}</p>

      <p className="mt-2 font-bold">Balance: Rs. {balance}</p>
    </div>
  );
}
