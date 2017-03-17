/**
 * Проверяем параметры инициализации и исправляем, при необходимости
 *
 * @param {Object} opts - параметры от пользователя
 *
 * @return {Object} - итоговые параметры
 */
window['AEX'].prototype.validateOpts = function (opts)
{
    if (!opts['waitingtime']) {
        opts['waitingtime'] = 30000;
    } else {
        var wt = parseInt(+opts['waitingtime'], 10);
        opts['waitingtime'] = isNaN(wt) ? 30000 : wt * 1000;
    }

    opts['target'] = opts['target'] ? ('' + opts['target']) : '/';

    return opts;
};