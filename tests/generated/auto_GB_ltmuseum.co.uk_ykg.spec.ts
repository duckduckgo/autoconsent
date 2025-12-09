import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ltmuseum.co.uk_ykg', ['https://www.ltmuseum.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
