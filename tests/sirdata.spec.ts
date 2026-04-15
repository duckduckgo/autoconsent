import generateCMPTests from '../playwright/runner';

generateCMPTests('sirdata', ['https://gizmodo.com/', 'https://kotaku.com/'], {
    testOptIn: false,
});
