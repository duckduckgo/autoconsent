import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_notar-drkotz.de_gz0', ['https://www.notar-drkotz.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
