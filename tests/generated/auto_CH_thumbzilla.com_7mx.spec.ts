import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thumbzilla.com_7mx', ['https://www.thumbzilla.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
