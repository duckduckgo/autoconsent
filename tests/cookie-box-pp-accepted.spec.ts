import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-box-pp-accepted', [
    'https://dnschecker.org/',
    'https://iplocation.io/',
    'https://url-decode.com/',
    'https://flipcoin.net/',
    'https://speedchecker.io/',
]);
