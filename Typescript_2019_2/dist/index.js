// SRC/Wwise/Utils.ts
var import_autobahn = require("autobahn");
function SimpleConnect(url, action) {
  let connection = new import_autobahn.Connection({
    url,
    realm: "realm1",
    protocols: ["wamp.2.json"]
  });
  connection.onopen = function(session) {
    action(session, connection);
  };
  connection.onclose = function(reason, details) {
    if (reason !== "lost") {
      console.log("Connection closed. Reason: " + reason);
    }
    process.exit();
  };
  connection.open();
}
function Sub(session, topic, options, action, onError) {
  session.subscribe(topic, (args, _kwargs, details) => {
    action(_kwargs);
  }, options).catch((err) => {
    onError(err);
  });
}
var DEFAULT_URL = "ws://localhost:8080/waapi";

// SRC/Wwise/waapi_apis_subs.ts
function T_ak_wwise_core_object_nameChanged(session, options, action, onError) {
  Sub(session, "ak.wwise.core.object.nameChanged", options, action, onError);
}

// SRC/index.ts
console.log("Wwise Tools By Fungus Light!!!!!");
SimpleConnect(DEFAULT_URL, (session, connection) => {
  T_ak_wwise_core_object_nameChanged(session, {
    return: ["id", "name", "path", "type", "parent", "workunit"]
  }, (kwargs) => {
    console.log("Name Changed: ", kwargs);
  }, (error) => {
    console.log("Error: ", error);
  });
});
