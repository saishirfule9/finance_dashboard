import React from "react";

export default function Insights({ transactions }) {
  const categoryTotals = {};

  transactions.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  const highest = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <div>
      <h2>Insights</h2>
      <p>Highest spending category: {highest}</p>
    </div>
  );
}
