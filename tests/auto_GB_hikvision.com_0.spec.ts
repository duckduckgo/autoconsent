import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_hikvision.com_0', ['https://www.hikvision.com/uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
