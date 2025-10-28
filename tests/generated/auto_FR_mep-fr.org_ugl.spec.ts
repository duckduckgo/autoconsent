import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mep-fr.org_ugl', ['https://www.mep-fr.org/en/homepage/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
