import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_volkswagen-newsroom.com_su3', ['https://www.volkswagen-newsroom.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
