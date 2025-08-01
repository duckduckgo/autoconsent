import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-newsroom.com_or4', ['https://www.volkswagen-newsroom.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
