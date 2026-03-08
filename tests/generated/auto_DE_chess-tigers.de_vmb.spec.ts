import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_chess-tigers.de_vmb', ['https://chess-tigers.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
