import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import TransportOrder from "./TransportOrder";




// ────────────────────────────────────────────────────────────────────────────────
test("transportID input should required", () => {
  render(
    <BrowserRouter>
      <TransportOrder />
    </BrowserRouter>
  );
  const transportID = screen.getByPlaceholderText("transportID");
  expect(transportID).toHaveAttribute("required");
});


// ────────────────────────────────────────────────────────────────────────────────



test("location   input should required", () => {
  render(
    <BrowserRouter>
      <TransportOrder />
    </BrowserRouter>
  );
  const location = screen.getByPlaceholderText("location");
  expect(location).toHaveAttribute("required");
});




