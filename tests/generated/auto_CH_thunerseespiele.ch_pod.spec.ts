import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thunerseespiele.ch_pod', ['https://thunerseespiele.ch/de/musical'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
