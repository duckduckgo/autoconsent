import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bigboy-tattoo.de_hdq', ['https://bigboy-tattoo.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
