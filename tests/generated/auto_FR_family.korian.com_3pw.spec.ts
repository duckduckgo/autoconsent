import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_family.korian.com_3pw', ['https://family.korian.com/login(cookie:cookie)'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
