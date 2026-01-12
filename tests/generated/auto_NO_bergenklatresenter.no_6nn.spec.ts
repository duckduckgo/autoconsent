import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bergenklatresenter.no_6nn', ['https://www.bergenklatresenter.no/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
