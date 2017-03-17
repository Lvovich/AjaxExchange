/**
 * Готовим данные для отправки, в зависимости от возможностей браузера (наличия FormData).
 *
 * @param {?} userData - данные для отправки от пользователя.
 *
 * @return {Object}
 */
window['AEX'].prototype.getExchangeData = function (userData)
{
    var res = {},
        _this = this;

    var getParameterValue = function (val) {
        return (typeof val in _this.opts.simpleTypes) ? val : JSON.stringify(val);
    };

    if (window['FormData']) {
        res.aexBoundary = '';
        res.userData = new window['FormData'];

        if (typeof userData in this.opts.simpleTypes) {
            res.userData.append(this.opts['defaultParamName'], userData);
        } else {
            for (var prop in userData) {
                if (userData.hasOwnProperty(prop)) {
                    res.userData.append(prop, getParameterValue(userData[prop]));
                }
            }
        }

    } else {
        var bound = 'aex' + ('' + Math.random()).slice(2, 18),
            boundMiddle = '\r\n--' + bound + '\r\n',
            boundLast = '\r\n--' + bound + '--',
            body = [''];

        res.aexBoundary = bound;

        if (typeof userData in this.opts.simpleTypes) {
            body.push('Content-Disposition: form-data; name="' + this.opts['defaultParamName'] + '"\r\n\r\n' +userData);
        } else {
            for (prop in userData) {
                if (userData.hasOwnProperty(prop)) {
                    body.push(
                        'Content-Disposition: form-data; name="' + prop + '"\r\n\r\n' +getParameterValue(userData[prop])
                    );
                }
            }
        }

        res.userData = body.join(boundMiddle) + boundLast;
    }

    return res;
};