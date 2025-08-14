import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_help.solidworks.com_ehm', ['https://help.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
