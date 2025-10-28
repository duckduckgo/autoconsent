import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_swindon.gov.uk_2xr', ['https://www.swindon.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
