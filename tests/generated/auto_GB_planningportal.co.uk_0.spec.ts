import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_planningportal.co.uk_0', ['https://www.planningportal.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
