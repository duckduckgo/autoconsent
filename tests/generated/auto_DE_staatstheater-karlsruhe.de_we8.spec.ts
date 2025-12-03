import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_staatstheater-karlsruhe.de_we8', ['https://www.staatstheater-karlsruhe.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
