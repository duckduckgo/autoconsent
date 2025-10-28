import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_waar-en-wanneer.nl_rpv', ['https://www.waar-en-wanneer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
