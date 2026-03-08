import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.nintex.com_5ay', ['https://community.nintex.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
