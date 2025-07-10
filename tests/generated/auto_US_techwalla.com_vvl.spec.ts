import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_techwalla.com_vvl', ['https://www.techwalla.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
