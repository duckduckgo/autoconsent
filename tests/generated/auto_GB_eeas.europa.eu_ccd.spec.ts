import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eeas.europa.eu_ccd', ['https://www.eeas.europa.eu/_en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
