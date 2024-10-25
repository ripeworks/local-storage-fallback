require("./helpers/setup-env")();

const test = require("ava");
const { storage } = require("../lib");

test("uses local storage", (t) => {
  t.is(storage.constructor.name, "Storage");
});

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
