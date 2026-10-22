import generateCMPTests from '../playwright/runner';

generateCMPTests('amazon-music', [
    'https://music.amazon.it/',
    'https://music.amazon.de/',
    'https://music.amazon.co.uk/',
    'https://music.amazon.fr/',
    'https://music.amazon.es/',
]);
