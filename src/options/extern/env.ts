/**
 * Mouse Dictionary (https://github.com/wtetsu/mouse-dictionary/)
 * Copyright 2018-present wtetsu
 * Licensed under MIT
 */
/* istanbul ignore file */

import env from "../../main/env";
import { BROWSER, Env } from "../types";

const optionsEnv = { ...env } as Env;

if (BROWSER === "FIREFOX") {
  // Larger registerRecordsAtOnce causes memory hog
  // when loading large dictionary data in Firefox.
  optionsEnv.registerRecordsAtOnce = 10000;
  optionsEnv.support = { localGetBytesInUse: false };
} else {
  optionsEnv.registerRecordsAtOnce = 100000;
  optionsEnv.support = { localGetBytesInUse: true };
}

export const get = (): Env => {
  return optionsEnv;
};
