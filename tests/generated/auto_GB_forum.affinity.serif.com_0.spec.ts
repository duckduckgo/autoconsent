import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forum.affinity.serif.com_0', ['https://forum.affinity.serif.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
