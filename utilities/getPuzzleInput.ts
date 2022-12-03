import { readFile } from "fs/promises";
import { fileURLToPath } from "node:url";

/**
 * Read the input.txt file and returns it as a Promise<string>
 * @param path {string}
 * @param sample {boolean}
 * @returns {Promise<string>}
 */
export const getPuzzleInput = async (path: string, sample = false) => {
  return await readFile(fileURLToPath(new URL(sample ? "input_sample.txt" : "input.txt", path)), "utf-8");
};

export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size));
