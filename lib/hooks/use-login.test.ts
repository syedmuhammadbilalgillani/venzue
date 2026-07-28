import { describe, it, expect } from "vitest";
import { AxiosError, AxiosHeaders } from "axios";
import { getLoginErrorMessage } from "./use-login";

function makeAxiosError(responseData?: unknown) {
  return new AxiosError(
    "Request failed",
    "ERR_BAD_REQUEST",
    { headers: new AxiosHeaders() },
    {},
    responseData
      ? {
          data: responseData,
          status: 400,
          statusText: "Bad Request",
          headers: {},
          config: { headers: new AxiosHeaders() },
        }
      : undefined
  );
}

describe("getLoginErrorMessage", () => {
  it("extracts the API error message from an axios error", () => {
    const error = makeAxiosError({ error: "user not found" });
    expect(getLoginErrorMessage(error)).toBe("user not found");
  });

  it("falls back to a generic message when the axios error has no body", () => {
    const error = makeAxiosError();
    expect(getLoginErrorMessage(error)).toBe("Something went wrong. Please try again.");
  });

  it("falls back to a generic message for non-axios errors", () => {
    expect(getLoginErrorMessage(new Error("network down"))).toBe(
      "Something went wrong. Please try again."
    );
    expect(getLoginErrorMessage("random string")).toBe(
      "Something went wrong. Please try again."
    );
  });
});
