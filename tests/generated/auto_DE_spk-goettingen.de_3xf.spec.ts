import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-goettingen.de_3xf', ['https://www.spk-goettingen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
