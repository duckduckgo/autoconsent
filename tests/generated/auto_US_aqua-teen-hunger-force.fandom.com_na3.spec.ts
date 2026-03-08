import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_aqua-teen-hunger-force.fandom.com_na3', ['https://aqua-teen-hunger-force.fandom.com/wiki/ATHF_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
