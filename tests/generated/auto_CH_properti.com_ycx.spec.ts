import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_properti.com_ycx', ['https://properti.com/ch/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
