import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_smarthome-assistant.info_ngg', ['https://smarthome-assistant.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
