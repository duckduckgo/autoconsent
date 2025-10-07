import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fifecountry.co.uk_c6t', ['https://www.fifecountry.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
