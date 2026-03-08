import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forum.candaceowens.com_nsw', ['https://forum.candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
