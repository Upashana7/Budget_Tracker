export default function TransactionItem({ transaction }) {
  return (
    <div
      className={`p-3 rounded-lg mb-2 text-white ${
        transaction.type === "income" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <h3 className="font-bold">{transaction.title}</h3>

      <p>Rs. {transaction.amount}</p>
    </div>
  );
}
