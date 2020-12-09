// import 'jquery';
import jQuery from '../../node_modules/jquery/dist/jquery.min.js';
window.jQuery=jQuery;
window.$=jQuery;




import app from './app.component.html';
import style from './app.component.scss';


//
$('app-root').replaceWith('<div id="app">'+app+'</div>');
var html='<style>'+style+'</sstyle>';
$('head').append(html);

/*document.getElementById('btn-dashboard').addEventListener('click',function (){
    alert('wada');
})*/




$('#btn-customer').click(function (){
 $('#outlet').children().eq(0).css('display','block');
 $('#outlet').children().eq(1).css('display','none');

});

$('#btn-dashboard').click(function (){
    $('#outlet').children().eq(0).css('display','none');
    $('#outlet').children().eq(1).css('display','block');

})
