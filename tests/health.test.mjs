import { test } from "node:test";
import assert from "node:assert/strict";
import { health } from "../src/health.mjs";
test("reports healthy", () => assert.deepEqual(health(), { status: "ok" }));
