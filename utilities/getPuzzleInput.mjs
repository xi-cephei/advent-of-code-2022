import { readFile } from "fs/promises";
import { fileURLToPath } from "node:url";

/**
 * Read the input.txt file and returns it as a Promise<string>
 * @param path {string}
 * @returns {Promise<string>}
 */
export const getPuzzleInput = async (path) => {
  return await readFile(fileURLToPath(new URL("input.txt", path)), "utf-8");
};
