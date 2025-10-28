import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_slideshare.net_sat', ['https://www.slideshare.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
