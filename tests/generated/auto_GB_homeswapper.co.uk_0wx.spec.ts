import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_homeswapper.co.uk_0wx', ['https://www.homeswapper.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
