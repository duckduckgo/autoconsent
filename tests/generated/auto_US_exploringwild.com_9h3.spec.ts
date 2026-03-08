import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_exploringwild.com_9h3', ['https://exploringwild.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
