import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_msisurfaces.com_6de', ['https://www.msisurfaces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
