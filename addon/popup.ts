import { BackgroundMessage } from "../lib/messages";
import { Config } from "../lib/types";
import { storageGet, storageRemove, storageSet } from "./mv-compat";
import { showOptOutStatus } from "./utils";

async function init() {
  const autoconsentConfig: Config = await storageGet('config');
  const enabledCheckbox = document.querySelector('input#enabled') as HTMLInputElement;
  const optOutRadio = document.querySelector('input#optout') as HTMLInputElement;
  const optInRadio = document.querySelector('input#optin') as HTMLInputElement;
  const promptRadio = document.querySelector('input#prompt') as HTMLInputElement;
  const prehideOnRadio = document.querySelector('input#prehide-on') as HTMLInputElement;
  const prehideOffRadio = document.querySelector('input#prehide-off') as HTMLInputElement;
  const retriesInput = document.querySelector('input#retries') as HTMLInputElement;

  // enable proceed button when necessary

  const [currentTab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
  const tabId = currentTab.id;
  const detectedKey = `detected${tabId}`;
  console.log('detectedKey', detectedKey);
  const frameId = await storageGet(detectedKey);
  console.log('frameId', frameId, typeof frameId);
  if (typeof frameId === 'number') {
    const proceedButton = document.createElement('button');
    proceedButton.innerText = 'Manage popup';
    proceedButton.id = 'proceed';
    proceedButton.addEventListener('click', () => {
      storageRemove(detectedKey);
      showOptOutStatus(tabId, "working");
      chrome.tabs.sendMessage(tabId, {
        type: "optOut",
      } as BackgroundMessage, {
        frameId,
      });
      proceedButton.remove();
      window.close();
    });
    document.body.prepend(proceedButton);
  }

  // set form initial values

  enabledCheckbox.checked = autoconsentConfig.enabled;
  retriesInput.value = autoconsentConfig.detectRetries.toString();
  if (autoconsentConfig.autoAction === 'optIn') {
    optInRadio.checked = true;
  } else if (autoconsentConfig.autoAction === 'optOut') {
    optOutRadio.checked = true;
  } else {
    promptRadio.checked = true;
  }

  if (autoconsentConfig.enablePrehide) {
    prehideOnRadio.checked = true;
  } else {
    prehideOffRadio.checked = true;
  }

  // set form event listeners

  enabledCheckbox.addEventListener('change', () => {
    autoconsentConfig.enabled = enabledCheckbox.checked;
    storageSet({ config: autoconsentConfig });
  });

  retriesInput.addEventListener('change', () => {
    autoconsentConfig.detectRetries = parseInt(retriesInput.value, 10);
    storageSet({ config: autoconsentConfig });
  });

  function modeChange() {
    if (optInRadio.checked) {
      autoconsentConfig.autoAction = 'optIn';
    } else if (optOutRadio.checked) {
      autoconsentConfig.autoAction = 'optOut';
    } else {
      autoconsentConfig.autoAction = null;
    }
    storageSet({ config: autoconsentConfig });
  }
  optInRadio.addEventListener('change', modeChange);
  optOutRadio.addEventListener('change', modeChange);
  promptRadio.addEventListener('change', modeChange);

  function prehideChange() {
    autoconsentConfig.enablePrehide = prehideOnRadio.checked;
    storageSet({ config: autoconsentConfig });
  }
  prehideOnRadio.addEventListener('change', prehideChange);
  prehideOffRadio.addEventListener('change', prehideChange);
}

init();
