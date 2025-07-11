import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thetelegraphandargus.co.uk_3en', ['https://www.thetelegraphandargus.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
