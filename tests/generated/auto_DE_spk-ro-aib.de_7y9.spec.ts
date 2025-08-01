import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-ro-aib.de_7y9', ['https://www.spk-ro-aib.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
