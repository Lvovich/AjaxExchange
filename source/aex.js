/**
 * Заглушка для пустой функции.
 */
var kickStub = function(){};

/** --------------------------------------------------------------------------------------------------------------------
 * Объект, дающий AJAX
 *
 * @param {{target, waitingtime, defaultParamName}} opts - параметры обмена:
 *     target           - адрес, куда отправлять запрос.
 *     waitingtime      - время ожидания ответа, после которого запрос прерывается.
 *     defaultParamName - если передаваемые данные - строка или число, в этом параметре можно задать имя данных.
 *          По-умолчанию "ajax".
 *
 * @constructor
 */
window['AEX'] = function (opts)
{
    if (!(typeof this === 'object' && this.prepareRequest())) {
        console.error('AEX: incorrect call without "new" or browser not supported. Plugin Off!');
        return {'kick':kickStub};
    }

    this.opts = this.validateOpts(opts);
};
