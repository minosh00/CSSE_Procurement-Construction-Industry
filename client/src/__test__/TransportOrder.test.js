import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import TransportOrder from "../components/Supplier/TransportOrder";


test("renders the Trans portOrder  page", () => {
  render(
    <BrowserRouter>
      <TransportOrder />
    </BrowserRouter>
  );
});

 // ────────────────────────────────────────────────────────────────────────────────

// test("vehi No    should have a type as text", () => {
//     render(
//       <BrowserRouter>
//         <TransportOrder />
//       </BrowserRouter>
//     );
//     const vehiNo = screen.getByPlaceholderText("vehiNo");
//     expect(vehiNo).toHaveAttribute("type", "text");
//   });
  
