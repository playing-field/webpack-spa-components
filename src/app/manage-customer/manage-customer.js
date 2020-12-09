import manageCustomer from './manage-customer.component.html'
import style from './manage-customer.scss'

$('app-manage-customer').replaceWith('<div id="manage-customer">'+manageCustomer+'</div>');
var html='<style>'+style+'</style>';
// $('#dashboard').append(html);
$('head').append(html);
