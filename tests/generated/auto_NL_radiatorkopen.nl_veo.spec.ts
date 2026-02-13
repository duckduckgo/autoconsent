import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_radiatorkopen.nl_veo', ['https://radiatorkopen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
