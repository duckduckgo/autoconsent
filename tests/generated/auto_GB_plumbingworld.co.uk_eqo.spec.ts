import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plumbingworld.co.uk_eqo', ['https://www.plumbingworld.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
