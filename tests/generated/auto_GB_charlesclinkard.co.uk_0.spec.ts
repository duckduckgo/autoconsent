import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_charlesclinkard.co.uk_0', ['https://www.charlesclinkard.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
