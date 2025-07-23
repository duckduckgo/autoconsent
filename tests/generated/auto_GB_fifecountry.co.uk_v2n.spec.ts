import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fifecountry.co.uk_v2n', ['https://www.fifecountry.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
