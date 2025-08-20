import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_saseurobonusmastercard.se_oqd', ['https://saseurobonusmastercard.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
