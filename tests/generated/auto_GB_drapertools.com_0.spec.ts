import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_drapertools.com_0', ['https://www.drapertools.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
