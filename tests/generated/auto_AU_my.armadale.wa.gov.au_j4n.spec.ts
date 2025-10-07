import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_my.armadale.wa.gov.au_j4n', ['https://my.armadale.wa.gov.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
