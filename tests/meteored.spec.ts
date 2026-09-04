import generateCMPTests from '../playwright/runner';

generateCMPTests('meteored', ['https://www.tempo.pt/', 'https://www.tiempo.com/', 'https://www.daswetter.com/'], {
    testOptIn: false,
});
