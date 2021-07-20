import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  props = props["expenses"];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={props[0].title}
        amount={props[0].amount}
        date={props[0].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
