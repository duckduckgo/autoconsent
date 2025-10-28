import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_community.bosch-smarthome.com_ktf', ['https://community.bosch-smarthome.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
