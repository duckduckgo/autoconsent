import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_olympiahall.com_aoy', ['https://www.olympiahall.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
