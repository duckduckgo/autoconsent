import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_splitmyfare.co.uk_n39', ['https://www.splitmyfare.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
