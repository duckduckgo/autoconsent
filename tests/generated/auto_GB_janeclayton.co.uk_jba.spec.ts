import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_janeclayton.co.uk_jba', ['https://www.janeclayton.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
