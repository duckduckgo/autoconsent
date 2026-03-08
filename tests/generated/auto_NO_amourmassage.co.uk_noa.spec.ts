import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_amourmassage.co.uk_noa', ['https://amourmassage.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
