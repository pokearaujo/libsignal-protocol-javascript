"use strict";

const Internal = {};
const libsignal = {};

require("./src/curve25519_wrapper")(libsignal, Internal);
require("./src/helpers")(libsignal, Internal);
require("./src/crypto")(libsignal, Internal);
require("./src/Curve")(libsignal, Internal);
require("./src/curve25519_worker_manager")(libsignal, Internal);
require("./src/KeyHelper")(libsignal, Internal);
require("./src/NumericFingerprint")(libsignal, Internal);
require("./src/protobufs")(libsignal, Internal);
require("./src/SessionBuilder")(libsignal, Internal);
require("./src/SessionCipher")(libsignal, Internal);
require("./src/SessionLock")(libsignal, Internal);
require("./src/SessionRecord")(libsignal, Internal);
require("./src/SignalProtocolAddress")(libsignal, Internal);


(async () => {
    const KeyHelper = libsignal.KeyHelper;

    const registrationId = KeyHelper.generateRegistrationId();
    console.log('registrationId', registrationId);

    const identityKeyPair = await KeyHelper.generateIdentityKeyPair();
    console.log('identityKeyPair', identityKeyPair);
})()