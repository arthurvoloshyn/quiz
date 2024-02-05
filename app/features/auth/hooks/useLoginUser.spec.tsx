import { renderHook, act } from "@testing-library/react-hooks";
import { useLoginUser } from "./useLoginUser";
import { useAuthStoreActions } from "../store/authStore";

jest.mock("../store/authStore", () => ({
  useAuthStoreActions: jest.fn(),
}));

describe("useLoginUser", () => {
  const loginMock = jest.fn();
  const email = "user@example.com";
  const password = "password";
  const errorMessage = "Invalid credentials";

  beforeEach(() => {
    // @ts-expect-error using jest function mock
    useAuthStoreActions.mockReturnValue({ login: loginMock });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return initial values", () => {
    const { result } = renderHook(() => useLoginUser());

    expect(result.current.loginUser).toBeInstanceOf(Function);
    expect(result.current.inProgress).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("should login user successfully while tracking progress", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLoginUser());

    loginMock.mockResolvedValueOnce(undefined);

    act(() => {
      result.current.loginUser({ email, password });
    });

    expect(result.current.inProgress).toBe(true);
    expect(loginMock).toHaveBeenCalledWith(email, password);

    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current.inProgress).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it("should handle login error", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLoginUser());

    loginMock.mockRejectedValueOnce(new Error(errorMessage));

    await act(async () => {
      result.current.loginUser({ email, password });
      await waitForNextUpdate();
    });

    expect(loginMock).toHaveBeenCalledWith(email, password);
    expect(result.current.inProgress).toBe(false);
    expect(result.current.error?.message).toBe(errorMessage);
  });

  it("should reset previous error before trying to login one more time", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLoginUser());

    loginMock.mockRejectedValueOnce(new Error(errorMessage));
    await act(async () => {
      result.current.loginUser({ email, password });
      await waitForNextUpdate();
    });
    expect(result.current.error?.message).toBe(errorMessage);

    loginMock.mockResolvedValueOnce(undefined);
    act(() => {
      result.current.loginUser({ email, password });
    });
    expect(result.current.inProgress).toBe(true);
    expect(result.current.error).toBeUndefined();
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current.inProgress).toBe(false);
    expect(result.current.error).toBeUndefined();
  });
});
