import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auswandern-info.com_dws', ['https://auswandern-info.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
