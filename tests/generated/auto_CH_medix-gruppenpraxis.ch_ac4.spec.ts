import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_medix-gruppenpraxis.ch_ac4', ['https://medix-gruppenpraxis.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
