import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sequencer.de_lpk', ['https://www.sequencer.de/synthesizer/blog/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
