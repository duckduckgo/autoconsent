import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_attack.mitre.org_czd', ['https://attack.mitre.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
