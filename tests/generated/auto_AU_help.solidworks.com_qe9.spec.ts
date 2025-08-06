import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.solidworks.com_qe9', ['https://help.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
