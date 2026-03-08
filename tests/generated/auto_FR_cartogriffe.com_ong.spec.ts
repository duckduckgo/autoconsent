import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cartogriffe.com_ong', ['https://cartogriffe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
