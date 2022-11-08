import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Payment from "../components/admin/Payment"

test("renders the Payment page", () => {
  render(
    <BrowserRouter>
      <Payment />
    </BrowserRouter>
  );
});

// ────────────────────────────────────────────────────────────────────────────────

test("Payment Method should be number", () => {
    render(
      <BrowserRouter>
        <Payment />
      </BrowserRouter>
    );
    const amount = screen.getByPlaceholderText("Enter Payment Amount");
    expect(amount).toHaveAttribute("type", "number");
  });