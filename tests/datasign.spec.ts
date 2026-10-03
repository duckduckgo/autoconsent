import generateCMPTests from '../playwright/runner';

generateCMPTests('datasign', [
    'https://www.jfe-holdings.co.jp/en/',
    'https://www.otafuku.co.jp/',
    'https://www.billboard-japan.com/',
    'https://www.dydo.co.jp/',
]);
