import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wirralglobe.co.uk_s62', ['https://www.wirralglobe.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
