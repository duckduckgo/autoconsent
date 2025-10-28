import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lyreco.com_6lh', ['https://www.lyreco.com/group/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
