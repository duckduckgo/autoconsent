import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ducati.com_4hw', ['https://www.ducati.com/gb/en/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
