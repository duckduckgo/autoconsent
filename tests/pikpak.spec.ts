import generateCMPTests from '../playwright/runner';

generateCMPTests('pikpak', [
    'https://mypikpak.com/',
    'https://mypikpak.com/en-US',
    'https://mypikpak.net/',
    'https://filepax.com/',
    'https://filepax.net/',
    'https://pikpakse.com/',
    'https://pikpax.net/',
    'https://pickpackapp.com/',
]);
