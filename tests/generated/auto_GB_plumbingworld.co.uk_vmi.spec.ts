import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_plumbingworld.co.uk_vmi', ['https://www.plumbingworld.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
