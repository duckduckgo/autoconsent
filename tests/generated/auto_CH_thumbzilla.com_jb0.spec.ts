import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thumbzilla.com_jb0', ['https://www.thumbzilla.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
