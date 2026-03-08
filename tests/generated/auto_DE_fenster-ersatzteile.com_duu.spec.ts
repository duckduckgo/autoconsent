import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fenster-ersatzteile.com_duu', ['https://fenster-ersatzteile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
