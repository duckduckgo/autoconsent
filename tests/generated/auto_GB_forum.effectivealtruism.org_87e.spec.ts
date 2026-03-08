import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_forum.effectivealtruism.org_87e', ['https://forum.effectivealtruism.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
