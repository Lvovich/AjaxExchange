/**
 * Готовим данные для отправки, в зависимости от возможностей браузера (наличия FormData).
 *
 * @param {Object} userData - объект от пользователя, с данными для отправки.
 *
 * @return {Object|FormData}
 */
window['AEX'].prototype.getExchangeData = function (userData)
{
    var res = {};

    if (window['FormData']) {
        res.aexBoundary = '';

        res.userData = new window['FormData'];
        res.userData.append('ajax', JSON.stringify(userData));
    } else {
        var bound = 'aex' + ('' + Math.random()).slice(2, 18);

        res.aexBoundary = bound;
        res.userData = '--' + bound + '\r\nContent-Disposition: form-data; name="ajax"\r\n\r\n' +
            JSON.stringify(userData) + '\r\n--' + bound + '--';
    }

    return res;
};