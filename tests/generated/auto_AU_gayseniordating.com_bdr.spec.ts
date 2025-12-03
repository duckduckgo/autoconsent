import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gayseniordating.com_bdr', ['https://www.gayseniordating.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
