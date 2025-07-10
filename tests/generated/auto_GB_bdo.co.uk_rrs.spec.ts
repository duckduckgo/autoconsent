import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bdo.co.uk_rrs', ['https://www.bdo.co.uk/en-gb/home'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
