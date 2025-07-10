import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_quooker.co.uk_m32', ['https://www.quooker.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
