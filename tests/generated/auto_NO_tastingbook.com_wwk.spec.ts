import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tastingbook.com_wwk', ['https://tastingbook.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
