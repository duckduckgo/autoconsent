import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thunerseespiele.ch_4b9', ['https://thunerseespiele.ch/de/musical'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
