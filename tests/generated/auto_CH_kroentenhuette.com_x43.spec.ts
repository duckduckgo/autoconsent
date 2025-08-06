import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kroentenhuette.com_x43', ['https://www.kroentenhuette.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
