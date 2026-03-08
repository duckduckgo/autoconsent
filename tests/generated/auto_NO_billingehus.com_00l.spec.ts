import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_billingehus.com_00l', ['https://billingehus.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
