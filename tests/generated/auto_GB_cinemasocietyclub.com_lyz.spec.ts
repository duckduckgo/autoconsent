import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cinemasocietyclub.com_lyz', ['https://cinemasocietyclub.com/auth/login'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
