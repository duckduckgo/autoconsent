import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_attack.mitre.org_uja', ['https://attack.mitre.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
