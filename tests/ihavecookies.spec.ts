import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'ihavecookies',
    ['https://sparktoro.com/', 'https://www.uv.es/', 'https://www.teatrepoliorama.com/', 'https://teatreneu.com/'],
    {},
);
