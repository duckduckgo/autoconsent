import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oberrieden.ch_pb0', ['https://www.oberrieden.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
