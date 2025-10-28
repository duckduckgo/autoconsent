import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_inyourarea.co.uk_nh0', ['https://www.inyourarea.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
