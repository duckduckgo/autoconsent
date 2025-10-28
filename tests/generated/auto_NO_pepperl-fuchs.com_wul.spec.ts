import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pepperl-fuchs.com_wul', ['https://www.pepperl-fuchs.com/no-no'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
