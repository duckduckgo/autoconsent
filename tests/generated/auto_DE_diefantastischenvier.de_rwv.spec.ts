import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diefantastischenvier.de_rwv', ['https://derletztebus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
