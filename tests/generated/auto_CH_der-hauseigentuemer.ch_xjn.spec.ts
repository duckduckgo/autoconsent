import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_der-hauseigentuemer.ch_xjn', ['https://der-hauseigentuemer.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
