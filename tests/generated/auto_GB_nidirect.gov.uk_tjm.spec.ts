import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nidirect.gov.uk_tjm', ['https://www.nidirect.gov.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
