import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greatyarmouthmercury.co.uk_xwt', ['https://www.greatyarmouthmercury.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
