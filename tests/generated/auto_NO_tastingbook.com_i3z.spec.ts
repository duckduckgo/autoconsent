import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tastingbook.com_i3z', ['https://tastingbook.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
