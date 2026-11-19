import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { App } from "@/App";

describe("Trada landing page", () => {
  it("renders the main page sections and navigation", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Main" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /questions, answered/i })).toBeInTheDocument();
  });

  it("explains that sign-up is pending", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole("button", { name: "Get Started" })[0]);

    expect(screen.getByRole("dialog")).toHaveTextContent("Sign-up is almost ready");
  });
});
