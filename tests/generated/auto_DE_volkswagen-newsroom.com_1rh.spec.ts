import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-newsroom.com_1rh', ['https://www.volkswagen-newsroom.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
