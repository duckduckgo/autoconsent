import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_shop.ordnancesurvey.co.uk_6sl', ['https://shop.ordnancesurvey.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
