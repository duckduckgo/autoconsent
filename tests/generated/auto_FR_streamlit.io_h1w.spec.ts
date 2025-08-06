import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_streamlit.io_h1w', ['https://streamlit.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
