import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_royalmail.com_zvv', ['https://www.royalmail.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
