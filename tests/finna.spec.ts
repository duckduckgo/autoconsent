import generateCMPTests from '../playwright/runner';

generateCMPTests('finna', ['https://keski.finna.fi/', 'https://www.finna.fi/', 'https://kansalliskirjasto.finna.fi/']);
