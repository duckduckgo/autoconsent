import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_currumbinsanctuary.com.au_6wi', ['https://currumbinsanctuary.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
