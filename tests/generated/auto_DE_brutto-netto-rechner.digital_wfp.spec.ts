import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brutto-netto-rechner.digital_wfp', ['https://brutto-netto-rechner.digital/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
