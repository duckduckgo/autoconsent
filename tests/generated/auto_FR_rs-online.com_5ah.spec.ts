import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rs-online.com_5ah', ['https://www.rs-online.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
