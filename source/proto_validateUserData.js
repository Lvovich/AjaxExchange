/**
 * Проверяет пользовательские параметры, переданные в kick.
 *
 * @return {boolean} - true, если все ок.
 */
window['AEX'].prototype['validateUserData'] = function ()
{
    return (typeof arguments[0][0] === 'object') && (typeof arguments[0][1] === 'function');
};