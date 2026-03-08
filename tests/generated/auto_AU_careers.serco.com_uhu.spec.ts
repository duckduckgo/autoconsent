import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_careers.serco.com_uhu', ['https://careers.serco.com/gb/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
