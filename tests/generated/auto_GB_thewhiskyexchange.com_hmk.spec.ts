import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thewhiskyexchange.com_hmk', ['https://www.thewhiskyexchange.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
