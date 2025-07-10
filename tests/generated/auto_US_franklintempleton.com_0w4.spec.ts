import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_franklintempleton.com_0w4', ['https://www.franklintempleton.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
