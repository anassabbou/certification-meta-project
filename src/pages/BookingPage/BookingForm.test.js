import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm Component", () => {
  const mockAvailableTimes = ["18:00", "19:00", "20:00"];
  const mockUpdateAvailableTimes = jest.fn();
  const mockSubmitForm = jest.fn();

  test("renders the form correctly", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        updateAvailableTimes={mockUpdateAvailableTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Check for form elements
    expect(screen.getByLabelText("Choose date *")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time *")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests *")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit Reservation" })).toBeDisabled();
  });

  test("enables submit button for valid form inputs", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        updateAvailableTimes={mockUpdateAvailableTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText("Choose date *"), {
      target: { value: "2024-11-29" },
    });
    fireEvent.change(screen.getByLabelText("Choose time *"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests *"), {
      target: { value: "4" },
    });

    // Submit button should now be enabled
    expect(screen.getByRole("button", { name: "Submit Reservation" })).toBeEnabled();
  });

  test("calls updateAvailableTimes on date change", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        updateAvailableTimes={mockUpdateAvailableTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Simulate date change
    fireEvent.change(screen.getByLabelText("Choose date *"), {
      target: { value: "2024-11-29" },
    });

    expect(mockUpdateAvailableTimes).toHaveBeenCalledTimes(1);
    expect(mockUpdateAvailableTimes).toHaveBeenCalledWith(new Date("2024-11-29"));
  });

  test("calls submitForm with correct data on form submission", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        updateAvailableTimes={mockUpdateAvailableTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText("Choose date *"), {
      target: { value: "2024-11-29" },
    });
    fireEvent.change(screen.getByLabelText("Choose time *"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests *"), {
      target: { value: "4" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: "Submit Reservation" }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2024-11-29",
      time: "18:00",
      guests: 4,
      occasion: "",
    });
  });
});
