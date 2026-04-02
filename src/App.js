import React, { useState } from "react";

export default function App() {
  const [role, setRole] = useState("viewer");

  const data = [
    { date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { date: "2026-04-02", amount: 1000, category: "Food", type: "expense" }
  ];

  const income = data.filter(d => d.type === "income").reduce((a,b)=>a+b.amount,0);
  const expense = data.filter(d => d.type === "expense").reduce((a,b)=>a+b.amount,0);

  return (
    <div style={{padding:"20px"}}>
      <h1>Finance Dashboard</h1>

      <select onChange={(e)=>setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <h2>Dashboard</h2>
      <p>Income: {income}</p>
      <p>Expense: {expense}</p>

      <h2>Transactions</h2>
      {data.map((t,i)=>(
        <div key={i}>
          {t.date} | {t.category} | {t.amount}
        </div>
      ))}

      {role === "admin" && <button>Add Transaction</button>}
    </div>
  );
}
