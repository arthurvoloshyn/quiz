/* eslint-disable global-require */

// TODO: this file can be generated automatically

type AssetId = "check" | "error" | "user";

export const getAsset = (id: AssetId) => {
  switch (id) {
    case "check":
      return require("./check.png");
    case "error":
      return require("./error.png");
    case "user":
      return require("./user.png");
    default:
      throw new Error(`Unknown asset id: ${id}`);
  }
};
