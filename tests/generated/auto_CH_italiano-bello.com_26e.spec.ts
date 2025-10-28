import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_italiano-bello.com_26e', ['https://italiano-bello.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
