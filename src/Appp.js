import React, { useState } from "react";
import data from "./data/data";
import "./styles/styles.css";

import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import RoleToggle from "./components/RoleToggle";
import Insights from "./components/Insights";

export default function App() {
  const [transactions, setTransactions] = useState(data);
  const [role, setRole] = useState("viewer");

  return (
    <div className="container">
      <h1>Finance Dashboard</h1>

      <RoleToggle role={role} setRole={setRole} />

      <Dashboard transactions={transactions} />

      <Transactions
        transactions={transactions}
        role={role}
        setTransactions={setTransactions}
      />

      <Insights transactions={transactions} />
    </div>
  );
}
