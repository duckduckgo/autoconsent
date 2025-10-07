import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_smarthome-assistant.info_mgk', ['https://smarthome-assistant.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
