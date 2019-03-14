/*var script = document.createElement('script');
script.type = 'text/javascript';
script.src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js";
document.head.appendChild(script);*/
//обЪявление функции по нахожению Id элемента из кода страницы и нахождение ogg ссылки
function Find(element){
  var class_list = element.getElementsByClassName('im_msg_audiomsg');
  //получение списка всех элементов с классом аудиосообщений
  //цикл для перебора каждого элемента из  списка
  for (var i of class_list) {
    var el_id = i.getAttribute("id"); //полуение Id элемента
    var el_id_ogg = el_id.substring(0, 3) + 'io' + el_id.substring(3, 6) + 'pl_' + el_id.substring(6);
    //преобразование исходнго Id в Id дочернего элемента
    input = document.createElement("input"); //объявление о создании элемента
    input.type = "button"; //указываем, что элемент является кнопкой
    //input.value = "перевести"; //текст в кнопке
    input.classList.add("tr_button");
    //вызов анонимной фукции при клике на кнопку
    input.onclick = function(){

        sendForm(el_id_ogg, element, i); //вызов функции sendForm()
    }
    i.appendChild(input);//добавление кнопки на форму
  }
}


function sendForm(e, el, i){

  var div_with_link = document.getElementById(e);
  var ogg_link = div_with_link.getAttribute("data-ogg");
  var out = document.createElement("div"); //вывод текста сообщения под самим аудиосообщением
  //out.className = "text_div";
  out.textContent = "Загрузка...";
  out.classList.add("text_div");
  i.appendChild(out);

  //alert(ogg_link);

  $(document).ready(function() {
    $.ajax({
        url: 'https://projsch.ml/text.php',
        dataType: 'json',
        data: {functionname: '', arguments: ogg_link},
        type: 'POST',
        jsonpCallback: 'callback', // this is not relevant to the POST anymore
        success: function () {
          alert("+");
        },
      });
    });
    setTimeout(function () {
      $(document).ready(function() {
          $.ajax({
            url: 'https://projsch.ml/mes.txt',
            type: 'POST',
            success: function (data) {
              //var r = document.createElement("div");
              out.textContent = data;
              i.appendChild(out);

              $.ajax({
                  url: 'https://projsch.ml/clear.php',
                  //dataType: 'json',
                  //data: {functionname: '', arguments: ogg_link},
                  type: 'POST',
                  success: function (data) {

                  }
                  //jsonpCallback: 'callback'
              });

            },
            error: function () {
              setTimeout(function () {
                $(document).ready(function() {
                    $.ajax({
                      url: 'https://projsch.ml/mes.txt',
                      type: 'POST',
                      success: function (data) {
                        //var r = document.createElement("div");
                        out.textContent = data;
                        i.appendChild(out);

                        $.ajax({
                            url: 'https://projsch.ml/clear.php',
                            //dataType: 'json',
                            //data: {functionname: '', arguments: ogg_link},
                            type: 'POST',
                            success: function (data) {

                            }
                            //jsonpCallback: 'callback'
                        });

                      },
                      error: function () {
                        setTimeout(function () {
                          $(document).ready(function() {
                              $.ajax({
                                url: 'https://projsch.ml/mes.txt',
                                type: 'POST',
                                success: function (data) {
                                  //var r = document.createElement("div");
                                  out.textContent = data;
                                  i.appendChild(out);

                                  $.ajax({
                                      url: 'https://projsch.ml/clear.php',
                                      //dataType: 'json',
                                      //data: {functionname: '', arguments: ogg_link},
                                      type: 'POST',
                                      success: function (data) {

                                      }
                                      //jsonpCallback: 'callback'
                                  });

                                },
                                error: function () {
                                  setTimeout(function () {
                                    $(document).ready(function() {
                                        $.ajax({
                                          url: 'https://projsch.ml/mes.txt',
                                          type: 'POST',
                                          success: function (data) {
                                            //var r = document.createElement("div");
                                            out.textContent = data;
                                            i.appendChild(out);

                                            $.ajax({
                                                url: 'https://projsch.ml/clear.php',
                                                //dataType: 'json',
                                                //data: {functionname: '', arguments: ogg_link},
                                                type: 'POST',
                                                success: function (data) {

                                                }
                                                //jsonpCallback: 'callback'
                                            });

                                          },
                                          error: function () {
                                            setTimeout(function () {
                                              $(document).ready(function() {
                                                  $.ajax({
                                                    url: 'https://projsch.ml/mes.txt',
                                                    type: 'POST',
                                                    success: function (data) {
                                                      //var r = document.createElement("div");
                                                      out.textContent = data;
                                                      i.appendChild(out);

                                                      $.ajax({
                                                          url: 'https://projsch.ml/clear.php',
                                                          //dataType: 'json',
                                                          //data: {functionname: '', arguments: ogg_link},
                                                          type: 'POST',
                                                          success: function (data) {

                                                          }
                                                          //jsonpCallback: 'callback'
                                                      });

                                                    },
                                                    error: function () {
                                                      setTimeout(function () {
                                                        $(document).ready(function() {
                                                            $.ajax({
                                                              url: 'https://projsch.ml/mes.txt',
                                                              type: 'POST',
                                                              success: function (data) {
                                                                //var r = document.createElement("div");
                                                                out.textContent = data;
                                                                i.appendChild(out);

                                                                $.ajax({
                                                                    url: 'https://projsch.ml/clear.php',
                                                                    //dataType: 'json',
                                                                    //data: {functionname: '', arguments: ogg_link},
                                                                    type: 'POST',
                                                                    success: function (data) {

                                                                    }
                                                                    //jsonpCallback: 'callback'
                                                                });

                                                              },
                                                              error: function () {

                                                              },
                                                          });
                                                        });
                                                      }, 4000);
                                                    },
                                                });
                                              });
                                            }, 4000);
                                          },
                                      });
                                    });
                                  }, 4000);
                                },
                            });
                          });
                        }, 3000);
                      },
                  });
                });
              }, 3000);
            },
        });
      });
    }, 3000);



  /*function updateFile(ogg_link)
  {
    //params = obj.name + '=' + obj.value;
    request.open('POST', 'https://projsch.ml/text.php', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(ogg_link);
  }*/
}

document.body.addEventListener('DOMNodeInserted', function onNewDOM(event) {
        if (event.target.nodeType == 1) Find(event.target);
    });
//Find(event.target);
