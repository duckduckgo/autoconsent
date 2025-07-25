import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gear4music.com_0', ['https://www.gear4music.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
