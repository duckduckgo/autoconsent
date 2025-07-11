import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ashemaletube.com_b2s', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
