import generateCMPTests from '../playwright/runner';

generateCMPTests('aspnet-cookieinfo', ['https://www.lamoncloa.gob.es/', 'https://www.mpr.gob.es/', 'https://www.onac.gob.es/']);
