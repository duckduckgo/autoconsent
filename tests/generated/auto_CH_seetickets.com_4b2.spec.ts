import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_seetickets.com_4b2', ['https://www.seetickets.com/ch/?'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
