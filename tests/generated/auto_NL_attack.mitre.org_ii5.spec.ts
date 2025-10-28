import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_attack.mitre.org_ii5', ['https://attack.mitre.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
