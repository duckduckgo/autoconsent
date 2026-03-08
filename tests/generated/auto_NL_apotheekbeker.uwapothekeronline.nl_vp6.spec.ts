import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_apotheekbeker.uwapothekeronline.nl_vp6', ['https://apotheekbeker.uwapothekeronline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
