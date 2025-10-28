import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_einfachmalene.de_mxa', ['https://www.einfachmalene.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
