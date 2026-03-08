import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_campustours.com_3tb', ['https://campustours.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
