import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rheinfelden.de_zzu', ['https://www.rheinfelden.de/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
