import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kidneycareuk.org_0', ['https://kidneycareuk.org/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
