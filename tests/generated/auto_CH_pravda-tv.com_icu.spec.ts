import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pravda-tv.com_icu', ['https://www.pravda-tv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
