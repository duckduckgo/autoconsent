import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_annaziekenhuis.nl_gz7', ['https://www.annaziekenhuis.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
