import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_comparecheapssl.com_1yw', ['https://comparecheapssl.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
