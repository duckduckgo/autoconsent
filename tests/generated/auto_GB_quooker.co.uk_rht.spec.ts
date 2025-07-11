import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_quooker.co.uk_rht', ['https://www.quooker.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
