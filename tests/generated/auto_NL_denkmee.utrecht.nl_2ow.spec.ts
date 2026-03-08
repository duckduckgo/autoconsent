import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_denkmee.utrecht.nl_2ow', ['https://denkmee.utrecht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
