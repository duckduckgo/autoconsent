import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_esm-computer.de_w9t', ['https://www.esm-computer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
