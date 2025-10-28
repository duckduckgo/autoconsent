import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_seniorzorg.nl_zss', ['https://www.seniorzorg.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
