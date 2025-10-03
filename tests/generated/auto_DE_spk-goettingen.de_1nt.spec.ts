import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spk-goettingen.de_1nt', ['https://www.spk-goettingen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
