// SRC/Wwise/Utils.ts
var import_autobahn = require("autobahn");
function CallWaapi(session, api, args, onSuccess, onError, onComplete) {
  session.call(api, [], args).then(
    function(res) {
      onSuccess?.call(this, res);
    },
    function(error) {
      onError?.call(this, error);
    }
  ).then(
    function() {
      onComplete?.call(this);
    }
  );
}
function SimpleAction(url, action) {
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
var DEFAULT_URL = "ws://localhost:8080/waapi";

// SRC/Wwise/waapi_apis.ts
function $ak_wwise_ui_bringToForeground(session, onComplete, onSuccess, onError) {
  CallWaapi(session, "ak.wwise.ui.bringToForeground", null, onSuccess, onError, onComplete);
}

// SRC/index.ts
console.log("Wwise Tools By Fungus Light!!!!!");
SimpleAction(DEFAULT_URL, (session, connection) => {
  $ak_wwise_ui_bringToForeground(session, () => {
    connection.close();
  });
});
