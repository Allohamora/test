import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter, plus, minus } from "./useCounter";

it("plus(string, number) returns a number", () => {
  expect(plus("", 5)).toBe(5);
});

it("minus(string, number) returns a number", () => {
  expect(minus("", 5)).toBe(-5);
});

describe("useCounter", () => {
  const render = () => renderHook(() => useCounter());

  it("onPlusClick adds a value to counter", () => {
    // init
    const { result } = render();

    // initial 0
    expect(result.current.counter).toBe(0);

    // set value to 5
    act(() => {
      result.current.onInputChange({ target: { value: "5" } });
    });

    // check success setting "5"
    expect(result.current.value).toBe("5");

    // plus "5" to counter
    act(() => {
      result.current.onPlusClick();
    });

    // check result
    expect(result.current.counter).toBe(5);
  });

  it("onMinusClick decreases counter by a value", () => {
    // init
    const { result } = render();
    
    // by default counter === 0
    expect(result.current.counter).toBe(0);

    // set value to 5
    act(() => {
      result.current.onInputChange({ target: { value: "5" } });
    });

    // check success setting "5"
    expect(result.current.value).toBe("5");

    // trigger minus handler
    act(() => {
      result.current.onMinusClick();
    });

    // after minus handler => counter should be -5.
    expect(result.current.counter).toBe(-5);
  })
});