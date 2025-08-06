import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auswandern-info.com_h8q', ['https://auswandern-info.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
