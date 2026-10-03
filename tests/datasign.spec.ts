import generateCMPTests from '../playwright/runner';

generateCMPTests('datasign', [
    'https://www.jfe-holdings.co.jp/investor/stock/factory_tour/index.html',
    'https://www.tamron.com/',
    'https://www.digisystem.com/',
    'https://www.nippon.com/',
    'https://www.nabtesco.com/',
    'https://www.gaitame.com/',
]);
