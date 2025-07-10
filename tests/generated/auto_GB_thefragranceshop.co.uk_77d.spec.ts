import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thefragranceshop.co.uk_77d', ['https://www.thefragranceshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
