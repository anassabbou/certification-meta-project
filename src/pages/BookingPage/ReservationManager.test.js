import { initializeTimes, updateTimes } from "./ReservationManager";
import { fetchAPI } from "../../utils/api";
import { act } from "react";

jest.mock("../../utils/api", () => ({
  fetchAPI: jest.fn(),
}));

describe("ReservationManager API Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes should fetch available times for today", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    let result;
    act(() => {
      result = initializeTimes();
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const calledWithDate = fetchAPI.mock.calls[0][0];
    calledWithDate.setHours(0, 0, 0, 0);

    expect(calledWithDate).toEqual(today);
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes should fetch available times for the given date", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: "UPDATE", payload: new Date("2024-11-27") };
    let result;
    act(() => {
      result = updateTimes([], action);
    });

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2024-11-27"));
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes should return current state if action type is unknown", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN", payload: new Date("2024-11-27") };

    let result;
    act(() => {
      result = updateTimes(initialState, action);
    });

    expect(result).toBe(initialState);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
