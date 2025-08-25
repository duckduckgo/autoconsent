import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gesundheits-lexikon.com_r5e', ['https://www.gesundheits-lexikon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
