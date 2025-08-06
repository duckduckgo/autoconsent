import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_royalmail.com_zbc', ['https://www.royalmail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
