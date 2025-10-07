import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_my.armadale.wa.gov.au_uj0', ['https://my.armadale.wa.gov.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
