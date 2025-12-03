import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chichester.gov.uk_0', ['https://www.chichester.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
