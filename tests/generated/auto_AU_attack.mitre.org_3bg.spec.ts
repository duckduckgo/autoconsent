import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_attack.mitre.org_3bg', ['https://attack.mitre.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
