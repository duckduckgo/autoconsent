import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_app.chatgirl.nl_uqi', ['https://app.chatgirl.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
