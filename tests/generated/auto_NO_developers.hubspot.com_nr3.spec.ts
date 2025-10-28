import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_developers.hubspot.com_nr3', ['https://developers.hubspot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
