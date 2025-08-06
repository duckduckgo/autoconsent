import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gesundheitszentrale.eu_jjq', ['https://www.gesundheitszentrale.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
