import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
};
export default config;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
// };
