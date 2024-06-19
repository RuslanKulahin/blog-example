/**
 * The `delayed` function returns a promise that resolves with the provided data after a specified
 * timeout, with an option to simulate failure.
 * @param {T} data - The `data` parameter in the `delayed` function is the value that you want to be
 * resolved in the Promise after a certain delay specified by the `timeout` option.
 * @param {DelayOptions} options - The `options` parameter in the `delayed` function is of type
 * `DelayOptions`, which can have two possible shapes:
 * @returns The `delayed` function returns a Promise that resolves with the `data` parameter after a
 * specified timeout period. If the `shouldFail` option is set to true, the Promise will reject with
 * the `data` parameter instead. The default timeout is set to 1500 milliseconds, and the default value
 * for `shouldFail` is false if not provided in the `options` parameter.
 */
type DelayOptions =
  | { timeout: number; shouldFail?: boolean }
  | { timeout?: number; shouldFail: boolean };

export function delayed<T>(
  data: T,
  options: DelayOptions = { shouldFail: false, timeout: 1500 },
) {
  const { shouldFail, timeout } = options;
  return new Promise<T>((resolve, reject) => {
    setTimeout(() => (shouldFail ? reject(data) : resolve(data)), timeout);
  });
}