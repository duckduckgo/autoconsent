import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_royalmail.com_tt5', ['https://www.royalmail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
