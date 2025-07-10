import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_academic.oup.com_4ct', ['https://academic.oup.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
