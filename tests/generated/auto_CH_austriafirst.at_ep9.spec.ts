import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_austriafirst.at_ep9', ['https://austriafirst.at/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
