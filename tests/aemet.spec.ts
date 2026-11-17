import generateCMPTests from '../playwright/runner';

generateCMPTests('aemet', ['https://www.aemet.es/es/portada', 'https://www.aemet.es/en/portada']);
