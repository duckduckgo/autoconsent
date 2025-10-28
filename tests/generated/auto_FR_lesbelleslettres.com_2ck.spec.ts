import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lesbelleslettres.com_2ck', ['https://www.lesbelleslettres.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
