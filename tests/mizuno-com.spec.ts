import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'mizuno.com',
    ['https://emea.mizuno.com/eu/it-it/how-to-start-running-for-beginners.html', 'https://emea.mizuno.com/eu/de-de/home/'],
    {},
);
