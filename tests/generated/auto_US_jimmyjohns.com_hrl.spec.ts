import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_jimmyjohns.com_hrl', ['https://www.jimmyjohns.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
