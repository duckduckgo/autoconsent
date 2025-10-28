import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_visitleeds.co.uk_611', ['https://www.visitleeds.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
