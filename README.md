# Plugin de notificação

Compativel com jQuery 1.7.0+ in Firefox, Safari, Chrome, Opera, Internet Explorer 7+. Nenhuma dependência exceto JQuery.

<h3>Uso</h3></br>
Inclua o css notify.min.css no <head> da sua pagina - e o JavaScript notify.min.js depois de carregar o jQuery. notifyplugin aceita configurações de um objeto de key/value, e pode ser aplicado em qualquer página.
$.fn.notify({options});
<h3>Configurações</h3></br>
type: success, warn ou danger,</br>
title: text,</br>
message: text.</br>
<h4>Exemplo:</h4> $.fn.notify({"type": "success", "title": "Salvo com Sucesso", "message": "alterações realizadas com sucesso"})


