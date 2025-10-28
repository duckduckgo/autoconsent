import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_creapharma.ch_mp2', ['https://www.creapharma.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
