import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.solidworks.com_2n2', ['https://help.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
