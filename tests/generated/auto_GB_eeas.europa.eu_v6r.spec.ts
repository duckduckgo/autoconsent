import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eeas.europa.eu_v6r', ['https://www.eeas.europa.eu/_en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
