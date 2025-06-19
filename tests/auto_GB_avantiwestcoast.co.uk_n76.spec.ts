import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_avantiwestcoast.co.uk_n76', ['https://www.avantiwestcoast.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
