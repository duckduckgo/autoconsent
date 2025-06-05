import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ltmuseum.co.uk_0', ['https://www.ltmuseum.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
