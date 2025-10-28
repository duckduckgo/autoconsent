import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_elfadistrelec.no_ts4', ['https://no.rs-online.com/web/?referrer=distrelec'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
