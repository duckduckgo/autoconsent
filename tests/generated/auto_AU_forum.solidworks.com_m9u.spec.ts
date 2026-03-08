import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_forum.solidworks.com_m9u', ['https://forum.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
