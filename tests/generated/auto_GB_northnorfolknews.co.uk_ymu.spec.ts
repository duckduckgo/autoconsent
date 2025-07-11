import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_northnorfolknews.co.uk_ymu', ['https://www.northnorfolknews.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
