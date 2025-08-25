import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lwl.org_4pu', ['https://www2.lwl.org/de/LWL/portal/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
