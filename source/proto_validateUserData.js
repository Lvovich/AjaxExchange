/**
 * Проверяет пользовательские параметры, переданные в kick.
 *
 * @return {boolean} - true, если все ок.
 */
window['AEX'].prototype.validateUserData = function ()
{
    return (typeof arguments[0]) in this.opts.allowTypes                    // typeof userData in allowTypes
        && (arguments[1] ? (typeof arguments[1] === 'function') : true);    // responseHandler не задан или function
};