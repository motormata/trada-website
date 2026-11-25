import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "@/App";

describe("Trada landing page", () => {
  it("renders the main page sections and navigation", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Main" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /questions, answered/i })).toBeInTheDocument();
  });

  it("links Get Started to the live registration page", () => {
    render(<App />);

    expect(screen.getAllByRole("link", { name: "Get Started" })[0]).toHaveAttribute(
      "href",
      "https://app.trada.com.ng/register",
    );
  });
});
