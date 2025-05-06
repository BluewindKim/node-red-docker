module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    credentialSecret: false,

    adminAuth: null,

    httpStatic: null,

    functionGlobalContext: {}
};
