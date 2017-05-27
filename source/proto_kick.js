/**
 * Пинает подготовленный запрос на подготовленный адрес.
 *
 * @param {Object}     data            - объект от пользователя, с данными для отправки.
 * @param {function()} responseHandler - пользовательский обработчик ответа.
 */
window['AEX'].prototype['kick'] = function (data, responseHandler)
{
    if (!this.validateUserData(data, responseHandler)) {
        console.warn('AEX.kick: Invalid user data or response handler. Aborted.');
        return;
    }

    this.xhr.handleResponse = responseHandler;

    this.xhr.open('POST', this.opts['target'], true);

    // из-за дебильного ИЕ эту настройку делаем после открытия запроса, а не в proto_prepareRequest.js
    this.xhr.timeout = this.opts['waitingtime'];

    var resObj = this.getExchangeData(data);

    if (resObj.aexBoundary) {
        this.xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + resObj.aexBoundary);
    }

    this.xhr.send(resObj.userData);
};