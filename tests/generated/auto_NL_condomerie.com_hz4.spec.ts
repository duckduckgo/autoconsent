import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_condomerie.com_hz4', ['https://condomerie.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
