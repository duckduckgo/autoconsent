import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_middleeasteye.net_ph7', ['https://www.middleeasteye.net/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
