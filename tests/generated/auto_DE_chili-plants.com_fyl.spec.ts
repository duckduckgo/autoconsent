import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_chili-plants.com_fyl', ['https://chili-plants.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
