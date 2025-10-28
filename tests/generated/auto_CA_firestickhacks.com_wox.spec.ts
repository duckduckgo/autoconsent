import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_firestickhacks.com_wox', ['https://firestickhacks.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
