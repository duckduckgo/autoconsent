import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_biblio.rimouski.ca_3nf', ['https://biblio.rimouski.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
