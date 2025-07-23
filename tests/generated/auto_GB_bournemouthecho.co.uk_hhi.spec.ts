import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bournemouthecho.co.uk_hhi', ['https://www.bournemouthecho.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
