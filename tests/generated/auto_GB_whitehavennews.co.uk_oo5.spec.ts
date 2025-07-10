import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_whitehavennews.co.uk_oo5', ['https://www.whitehavennews.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
