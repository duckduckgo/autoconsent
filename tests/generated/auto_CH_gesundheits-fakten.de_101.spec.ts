import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheits-fakten.de_101', ['https://www.gesundheits-fakten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
