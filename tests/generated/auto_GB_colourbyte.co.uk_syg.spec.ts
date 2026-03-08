import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_colourbyte.co.uk_syg', ['https://colourbyte.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
