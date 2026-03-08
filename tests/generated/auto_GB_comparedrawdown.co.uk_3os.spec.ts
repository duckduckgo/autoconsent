import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_comparedrawdown.co.uk_3os', ['https://comparedrawdown.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
