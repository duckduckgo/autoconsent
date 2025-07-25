import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_compact-online.de_2vs', ['https://www.compact-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
