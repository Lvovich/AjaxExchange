/**
 * Подготовка объекта запроса.
 *
 * @return {boolean}
 */
window['AEX'].prototype.prepareRequest = function ()
{
    if (!XMLHttpRequest) {
        return false;
    }

    this.xhr = new XMLHttpRequest();

    this.xhr.onreadystatechange = this.onResponse;

    this.xhr.ontimeout = function () {
        console.warn('AEX.kick: No server response for a long times. Exchange aborted. Retry later.');
    };

    return true;
};