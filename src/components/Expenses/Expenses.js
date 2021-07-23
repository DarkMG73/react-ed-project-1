import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  props = props["expenses"];
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">
        <ExpenseItem
          title={props[0].title}
          amount={props[0].amount}
          date={props[0].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
