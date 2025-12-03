import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_help.solidworks.com_2kv', ['https://help.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
