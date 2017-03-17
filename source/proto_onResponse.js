/**
 * Обработка ответа сервера.
 */
window['AEX'].prototype.onResponse = function ()
{
    if (this.readyState == 4) {
        if (this.status == 200)
            this.handleResponse(this.responseText);
        else
            this.handleResponse(this.status + ': ' + this.statusText);
    }
};