import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fifecountry.co.uk_bdp', ['https://www.fifecountry.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
