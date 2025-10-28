import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bezoek-ede.nl_orp', ['https://www.bezoek-ede.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
