import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.affinity.serif.com_a31', ['https://forum.affinity.serif.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
