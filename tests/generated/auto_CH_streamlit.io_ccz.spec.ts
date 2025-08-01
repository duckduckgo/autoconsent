import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_streamlit.io_ccz', ['https://streamlit.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
