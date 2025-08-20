import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chronoswiss.com_o3v', ['https://chronoswiss.com/en/intl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
