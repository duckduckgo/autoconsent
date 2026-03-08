import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fietsonderdeel.com_iit', ['https://fietsonderdeel.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
