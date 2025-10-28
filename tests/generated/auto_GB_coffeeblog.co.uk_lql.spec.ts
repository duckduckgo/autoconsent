import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_coffeeblog.co.uk_lql', ['https://coffeeblog.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
