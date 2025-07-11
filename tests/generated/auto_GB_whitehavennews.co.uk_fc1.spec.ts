import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_whitehavennews.co.uk_fc1', ['https://www.whitehavennews.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
