import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-box-notice', [
    'https://www.tabirai.net/',
    'https://apanavi.jp/',
    'https://monthly-osaka.jp/',
    'https://kyowa-group.jp/',
    'https://www.tlsnet.co.jp/',
    'https://rc-imari.jp/',
]);
