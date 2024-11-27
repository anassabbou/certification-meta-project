import { isFormValid } from "./BookingForm";

describe("BookingForm - isFormValid Function", () => {
  test("returns true for valid inputs", () => {
    const validData = { date: "2024-11-29", time: "18:00", guests: 4 };
    expect(isFormValid(validData)).toBe(true);
  });

  test("returns false if date is missing", () => {
    const invalidData = { date: "", time: "18:00", guests: 4 };
    expect(isFormValid(invalidData)).toBe(false);
  });

  test("returns false if time is missing", () => {
    const invalidData = { date: "2024-11-29", time: "", guests: 4 };
    expect(isFormValid(invalidData)).toBe(false);
  });

  test("returns false if guests are less than 1", () => {
    const invalidData = { date: "2024-11-29", time: "18:00", guests: 0 };
    expect(isFormValid(invalidData)).toBe(false);
  });

  test("returns false if guests are more than 10", () => {
    const invalidData = { date: "2024-11-29", time: "18:00", guests: 11 };
    expect(isFormValid(invalidData)).toBe(false);
  });
});
