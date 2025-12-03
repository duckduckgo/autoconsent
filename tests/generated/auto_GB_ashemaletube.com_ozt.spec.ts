import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ashemaletube.com_ozt', ['https://www.ashemaletube.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
