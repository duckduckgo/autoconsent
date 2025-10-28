import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_attack.mitre.org_bny', ['https://attack.mitre.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
