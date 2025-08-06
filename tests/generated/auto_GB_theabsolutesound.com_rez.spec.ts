import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theabsolutesound.com_rez', ['https://www.theabsolutesound.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
