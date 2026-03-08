import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cls-computer.de_jng', ['https://cls-computer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
