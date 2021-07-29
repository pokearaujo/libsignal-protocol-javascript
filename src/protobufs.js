/* vim: ts=4:sw=4 */
const ProtoBuf = require("protobufjs");
const path = require('path');

module.exports = function (libsignal = {}, Internal = {}) {
  Internal.protobuf = (function () {
    "use strict";

    const protodir = path.resolve(__dirname, "../protos/");
    function loadProtoBufs(filename) {
      return ProtoBuf.loadProtoFile(path.join(protodir, filename)).build(
        "textsecure"
      );
    }

    var protocolMessages = loadProtoBufs("WhisperTextProtocol.proto");

    return {
      WhisperMessage: protocolMessages.WhisperMessage,
      PreKeyWhisperMessage: protocolMessages.PreKeyWhisperMessage,
    };
  })();
};
