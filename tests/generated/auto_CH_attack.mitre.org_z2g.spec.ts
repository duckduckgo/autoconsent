import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_attack.mitre.org_z2g', ['https://attack.mitre.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
