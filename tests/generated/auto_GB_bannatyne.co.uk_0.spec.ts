import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bannatyne.co.uk_0', ['https://www.bannatyne.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
