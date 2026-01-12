import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-group.com_2rp', ['https://www.volkswagen-group.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
