import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vintageinn.co.uk_0', ['https://www.vintageinn.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
