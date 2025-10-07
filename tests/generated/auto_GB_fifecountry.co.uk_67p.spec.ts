import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fifecountry.co.uk_67p', ['https://www.fifecountry.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
