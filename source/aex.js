/**
 * Объект, дающий AJAX
 *
 * @param {{target, waitingtime}} opts - параметры обмена
 *                                      target      - адрес, куда отправлять запрос
 *                                      waitingtime - время ожидания ответа, после которого запрос прерывается
 *
 * @constructor
 */
window['AEX'] = function (opts)
{
    if (typeof this !== 'object') {
        console.error('AEX: incorrect call without "new". Plugin Off!');
        return {"kick":function(){}};
    }

    this.opts = this.validateOpts(opts);

    this.prepareRequest();
};