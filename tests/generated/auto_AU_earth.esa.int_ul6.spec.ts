import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_earth.esa.int_ul6', ['https://earth.esa.int/eogateway'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
