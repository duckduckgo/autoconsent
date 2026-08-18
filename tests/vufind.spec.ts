import generateCMPTests from '../playwright/runner';

generateCMPTests('vufind', ['https://keski.finna.fi/', 'https://kavi.finna.fi/'], { mobile: true, testOptIn: false });
