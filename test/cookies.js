require("./helpers/setup-env")({ storageQuota: 0 });
const test = require("ava");
const { storage, CookieStorage } = require("../lib");

test("uses cookie storage", (t) => {
  t.is(storage.constructor.name, "CookieStorage");
});

test("get/set with cookie storage", (t) => {
  storage.setItem("test", 1);
  t.is(storage.getItem("test"), "1");
});

test("remove with cookie storage", (t) => {
  storage.setItem("test", 2);
  storage.removeItem("test");
  t.is(storage.getItem("test"), null);
});

test("clear with cookie storage", (t) => {
  storage.setItem("test", 2);
  storage.clear();
  t.is(storage.getItem("test"), null);
});

test("specify cookie options", (t) => {
  // set expiry in 1 hour
  const expires = new Date();
  expires.setHours(expires.getHours() + 1);

  const cookieStorage = new CookieStorage({
    prefix: "customPrefix",
    expires,
  });

  cookieStorage.setItem("test", 1);

  t.is(document.cookie.indexOf("customPrefix"), 0);
});

test("specify cookie prefix option", (t) => {
  storage.clear();

  const cookieStorage = new CookieStorage({
    prefix: "",
  });

  cookieStorage.setItem("test", 1);

  t.is(document.cookie.indexOf("test"), 0);
});
