import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sportsmanguncentre.co.uk_bvs', ['https://www.sportsmanguncentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
