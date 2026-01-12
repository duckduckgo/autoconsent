import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_criticalrole.fandom.com_1u6', ['https://criticalrole.fandom.com/wiki/Critical_Role_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
