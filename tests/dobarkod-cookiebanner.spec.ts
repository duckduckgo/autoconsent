import generateCMPTests from '../playwright/runner';

generateCMPTests('dobarkod-cookiebanner', [
    'https://quizoftheday.co.uk/',
    'https://protobuf.dev/',
    'https://winterbe.com/',
    'https://www.cagi.org/',
]);
