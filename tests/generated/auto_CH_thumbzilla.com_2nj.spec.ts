import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thumbzilla.com_2nj', ['https://www.thumbzilla.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
