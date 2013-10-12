$(document).ready(function(){
    console.log('Execing app!');

    todoApp = new TodoApp();
    todoApp.render($('body'));
    // todoApp.exec();

});