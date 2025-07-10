import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bonmarche.co.uk_jnj', ['https://www.bonmarche.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
