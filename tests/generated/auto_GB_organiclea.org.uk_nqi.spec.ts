import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_organiclea.org.uk_nqi', ['https://crm.organiclea.org.uk/holding-page'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
