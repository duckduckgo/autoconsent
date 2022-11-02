import { ReportResponseMessage } from "../../lib/messages";

type DevtoolsAuditMessage = ReportResponseMessage & { tabId: number, frameId: number }


function getRowForFrame(frameId: number) {
    const rowId = `frame-${frameId}`;
    if (document.getElementById(rowId) !== null) {
        // update existing row
        const td = document.getElementById(rowId).querySelectorAll('td');
        return td;
    } else {
        const template : HTMLTemplateElement = document.querySelector('#row');
        const table = document.querySelector('tbody');
        const clone = template.content.cloneNode(true) as HTMLElement;
        const td = clone.querySelectorAll('td');
        table.appendChild(clone);
        table.lastElementChild.id = rowId;
        return td;
    }
}

function reconnect(): chrome.runtime.Port {
    const backgroundPageConnection = chrome.runtime.connect({
        name: "devtools-panel"
    });

    backgroundPageConnection.onMessage.addListener(function (message: DevtoolsAuditMessage) {
        const td = getRowForFrame(message.frameId);
        if (message.active === false) {
            td[0].classList.add('dead')
            td[1].classList.add('dead')
        } else {
            td[0].classList.remove('dead')
            td[1].classList.remove('dead')
        }
        td[0].innerText = `${message.frameId}`;
        td[1].innerText = message.url;
        td[2].innerText = message.state.lifecycle
        td[3].innerText = message.state.prehideOn ? 'yes' : 'no'
        td[4].innerText = `${message.state.findCmpAttempts}`;
        td[5].innerText = message.state.detectedCmps.join(', ');
        td[6].innerText = message.state.detectedPopups.join(', ');
    });
    
    // Relay the tab ID to the background page
    const pollInterval = setInterval(() => {
        backgroundPageConnection.postMessage({
            type: 'report',
            tabId: chrome.devtools.inspectedWindow.tabId,
        });
    }, 500);
    
    backgroundPageConnection.onDisconnect.addListener(() => {
        clearInterval(pollInterval);
        reconnect();
    });

    return backgroundPageConnection;
}

reconnect().postMessage({
    type: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId,
})
