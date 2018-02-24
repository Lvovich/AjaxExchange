/**
 * Пинает подготовленный запрос на подготовленный адрес.
 *
 * @param {Object}      data            - объект от пользователя, с данными для отправки.
 * @param {function()=} responseHandler - пользовательский обработчик ответа.
 *
 * @return {{xhr:XMLHttpRequest, data:Object}|null}
 */
window['AEX'].prototype['kick'] = function(data, responseHandler)
{
    if (!this.validateUserData(data, responseHandler)) {
        console.warn('AEX.kick: Invalid user data or response handler. Aborted.');
        return null;
    }

    var resObj = this.getExchangeData(data);

    if (resObj.aexBoundary) {
        this.xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + resObj.aexBoundary);
    }

    this.xhr.handleResponse = responseHandler;

    this.xhr.open('POST', this.opts['target'], true);
    this.xhr.timeout = this.opts['waitingtime'];
    this.xhr.send(resObj.userData);

    return {'xhr':this.xhr, 'data':data};
};