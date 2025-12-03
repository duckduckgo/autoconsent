import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_atlantafed.org_o3l', ['https://www.atlantafed.org/cqer/research/gdpnow'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
