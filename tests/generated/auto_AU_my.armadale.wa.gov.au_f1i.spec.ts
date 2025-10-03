import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_my.armadale.wa.gov.au_f1i', ['https://my.armadale.wa.gov.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
