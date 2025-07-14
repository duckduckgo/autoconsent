import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_quooker.co.uk_m4v', ['https://www.quooker.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
