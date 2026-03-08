import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boutiquehotel.me_r3f', ['https://boutiquehotel.me/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
