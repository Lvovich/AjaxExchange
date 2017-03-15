/**
 * Подготовка объекта запроса.
 */
window['AEX'].prototype['prepareRequest'] = function ()
{
    this.xhr = new XMLHttpRequest();

    this.xhr.onreadystatechange = this['onResponse'];

    this.xhr.timeout = this.opts['waitingtime'];

    this.xhr.ontimeout = function () {
        console.warn('AEX.kick: No server response for a long times. Exchange aborted. Retry later.');
    };
};