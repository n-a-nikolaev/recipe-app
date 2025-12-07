import { render, screen } from "@chakra-ui/react";
import { describe, it, expect } from "vitest";
import Footer from "./footer";

describe("Footer", () => {
  it("renders footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("displays copyright symbol", () => {
    render(<Footer />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  it("displays current year", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it("displays author name", () => {
    render(<Footer />);
    expect(screen.getByText(/Nikolay Nikolaev/)).toBeInTheDocument();
  });

  it("has correct text alignment", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveStyle("text-align: center");
  });

  it("has correct padding", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveStyle("padding-top");
    expect(footer).toHaveStyle("padding-bottom");
  });
});
