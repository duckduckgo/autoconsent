import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_forum.valentin-software.com_z7q', ['https://forum.valentin-software.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
