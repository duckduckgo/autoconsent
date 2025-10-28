import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_starwalk.space_580', ['https://starwalk.space/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
