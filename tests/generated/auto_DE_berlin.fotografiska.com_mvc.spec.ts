import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlin.fotografiska.com_mvc', ['https://berlin.fotografiska.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
