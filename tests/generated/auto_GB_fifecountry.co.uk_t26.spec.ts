import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fifecountry.co.uk_t26', ['https://www.fifecountry.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
