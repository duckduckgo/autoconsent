import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_virginmedia.com_0', ['https://www.virginmedia.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
