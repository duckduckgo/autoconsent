import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_forum.candaceowens.com_y9w', ['https://forum.candaceowens.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
