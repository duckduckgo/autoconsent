import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_barnet.gov.uk_up8', ['https://www.barnet.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
