import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bonjourdrink.co_yd5', ['https://bonjourdrink.co/?bd_discount=1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
