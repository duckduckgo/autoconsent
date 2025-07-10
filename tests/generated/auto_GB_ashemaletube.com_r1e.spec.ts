import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ashemaletube.com_r1e', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
