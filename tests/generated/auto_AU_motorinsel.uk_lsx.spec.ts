import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_motorinsel.uk_lsx', ['https://www.motorinsel.uk/n18b16a-engine'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
