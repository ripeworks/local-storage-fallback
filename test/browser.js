const fs = require("fs");

const dist = fs.readFileSync("lib/dist.min.js");

require("./helpers/setup-env")({
  html: `<script>${dist}</script>`,
  runScripts: "dangerously",
});

const test = require("ava");
const storage = global.window.localStorageFallback;

test("get/set with local storage", (t) => {
  storage.setItem("test", 1);
  t.is(storage.getItem("test"), "1");
});

test("remove with local storage", (t) => {
  storage.setItem("test", 2);
  storage.removeItem("test");
  t.is(storage.getItem("test"), null);
});

test("clear with local storage", (t) => {
  storage.setItem("test", 2);
  storage.clear();
  t.is(storage.getItem("test"), null);
});
