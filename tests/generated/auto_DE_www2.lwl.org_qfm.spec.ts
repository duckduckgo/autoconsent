import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_www2.lwl.org_qfm', ['https://www2.lwl.org/de/LWL/portal/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
