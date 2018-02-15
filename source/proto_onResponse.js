/**
 * Обработка ответа сервера.
 */
window['AEX'].prototype.onResponse = function()
{
    if (this.readyState === 4 && this.handleResponse) {
        this.handleResponse();
    }
};