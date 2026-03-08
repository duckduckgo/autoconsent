import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_diffusionsaguenay.art_j9k', ['https://diffusionsaguenay.art/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
