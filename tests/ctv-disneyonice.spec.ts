import generateCMPTests from '../playwright/runner';

generateCMPTests('ctv-disneyonice', ['https://www.ctv.co.jp/disneyonice/'], {
    testOptIn: false,
});
