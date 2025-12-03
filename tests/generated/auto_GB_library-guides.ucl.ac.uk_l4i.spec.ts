import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_library-guides.ucl.ac.uk_l4i', ['https://library-guides.ucl.ac.uk/az/databases'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
