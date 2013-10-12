$(document).ready(function(){
    console.log('Execing app!');

    todoApp = new TodoApp();
    todoApp.render($('body'));
    // todoApp.exec();

    console.log('TODO: IMPLEMENTAR EL DESTROY DEL TODO ITEM Y FIXEAR EL BUG QUE CREA TODO ITEMS BIEN RARO!');

});