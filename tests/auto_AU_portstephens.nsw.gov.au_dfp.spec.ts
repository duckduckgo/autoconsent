import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_portstephens.nsw.gov.au_dfp', ['https://www.portstephens.nsw.gov.au/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
