import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schwaebischealb.de_vvu', ['https://www.schwaebischealb.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
