import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.affinity.serif.com_wo5', ['https://forum.affinity.serif.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
