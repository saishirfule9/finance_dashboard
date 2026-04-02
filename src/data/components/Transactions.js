import React, { useState } from "react";

export default function Transactions({ transactions, role, setTransactions }) {
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: "2026-04-04",
      amount: 1500,
      category: "Misc",
      type: "expense"
    };
    setTransactions([...transactions, newTx]);
  };

  return (
    <div>
      <h2>Transactions</h2>

      <input
        placeholder="Search category"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.category}</td>
              <td>{t.amount}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {role === "admin" && (
        <button onClick={addTransaction}>Add Transaction</button>
      )}
    </div>
  );
}
