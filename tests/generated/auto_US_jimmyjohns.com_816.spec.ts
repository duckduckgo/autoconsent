import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jimmyjohns.com_816', ['https://www.jimmyjohns.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
