import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_guide.michelin.com_2l1', ['https://guide.michelin.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
