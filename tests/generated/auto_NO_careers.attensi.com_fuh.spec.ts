import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_careers.attensi.com_fuh', ['https://careers.attensi.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
