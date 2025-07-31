import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wirralglobe.co.uk_6iz', ['https://www.wirralglobe.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
