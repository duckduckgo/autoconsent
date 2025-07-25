import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_promessedefleurs.com_1d1', ['https://www.promessedefleurs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
