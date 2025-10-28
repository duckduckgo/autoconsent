import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ttrockstars.com_dnm', ['https://ttrockstars.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
