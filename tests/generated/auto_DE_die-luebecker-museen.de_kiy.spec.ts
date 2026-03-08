import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_die-luebecker-museen.de_kiy', ['https://die-luebecker-museen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
