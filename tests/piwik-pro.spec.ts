import generateCMPTests from '../playwright/runner';

generateCMPTests('piwik-pro', [
    'https://www.shawbrook.co.uk/',
    'https://www.hella.com/',
    'https://www.angelinipharma.com/',
    'https://www.laurabiagiottiparfums.com/',
    'https://www.volvofinans.se/',
    'https://www.rivageinvestment.com/',
]);
