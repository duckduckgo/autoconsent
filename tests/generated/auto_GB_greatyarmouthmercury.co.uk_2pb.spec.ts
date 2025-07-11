import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_greatyarmouthmercury.co.uk_2pb', ['https://www.greatyarmouthmercury.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
