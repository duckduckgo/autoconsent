import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_auraframes.com_xpf', ['https://auraframes.ca/?country_set=CA'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
