import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pirateship.com_yfw', ['https://www.pirateship.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
