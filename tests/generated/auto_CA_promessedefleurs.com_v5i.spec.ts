import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_promessedefleurs.com_v5i', ['https://www.promessedefleurs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
