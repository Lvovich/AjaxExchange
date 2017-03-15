/**
 * Пинает подготовленный запрос на подготовленный адрес.
 *
 * @param {Object}   data            - объект от пользователя, с данными для отправки.
 * @param {function()} responseHandler - пользовательский обработчик ответа.
 */
window['AEX'].prototype['kick'] = function (data, responseHandler)
{
    if (!this['validateUserData'](arguments)) {
        console.warn('AEX.kick: Invalid user data or response handler. Aborted.');
        return;
    }

    this.xhr['handleResponse'] = responseHandler;

    this.xhr.open('POST', this.opts['target'], true);

    var formData = new window['FormData'];
    formData.append('ajax', JSON.stringify(data));

    this.xhr.send(formData);
};