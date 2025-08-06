import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_saseurobonusmastercard.se_p5c', ['https://saseurobonusmastercard.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
