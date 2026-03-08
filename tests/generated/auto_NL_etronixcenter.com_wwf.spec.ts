import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_etronixcenter.com_wwf', ['https://etronixcenter.com/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
