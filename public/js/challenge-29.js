(function($) {
    'use strict';

    var app = (function() {

        var $photo = $('[data-js="photo"]').get();
        var $model = $('[data-js="model"]').get();
        var $year = $('[data-js="year"]').get();
        var $code = $('[data-js="code"]').get();
        var $color = $('[data-js="color"]').get();
        var $results = $('[data-js="results"]').get();
        var $title = $('title').get();
        var $name = $('[data-js="name"]').get();
        var $phone = $('[data-js="phone"]').get();
        var $add = $('[data-js="form-add"]');
        var $inputs = $('input[type="text"]').node;

        function clear() {
            Array.prototype.map.call($inputs, function(item) {
                return item.value = ``;
            });
        }

        return {
            init: function() {
                this.initEvents();
                this.company();
            },
            initEvents: function() {
                $add.on('submit', this.add);
            },
            company: () => {
                var ajax = new XMLHttpRequest();
                ajax.open('GET', '/js/data/company.json');
                ajax.send();
                ajax.onreadystatechange = function() {
                    if(ajax.status === 200 && ajax.readyState === 4) {
                        var data = JSON.parse(ajax.responseText);
                        $title.innerHTML = data.name;
                        $name.innerHTML = data.name;
                        $phone.innerHTML = data.phone;
                    }
                }

            },
            add: event => {
                event.preventDefault();
                $results.appendChild(app.create());
                clear();
            },
            create: () => {
                var $fragment = document.createDocumentFragment();
                var $row = document.createElement('li');

                var $rowPhoto = document.createElement('div');
                var $photoCar = document.createElement('img');
                var $rowModel = document.createElement('div');
                var $rowYear = document.createElement('div');
                var $rowCode = document.createElement('div');
                var $rowColor = document.createElement('div');
                var $rowDelete = document.createElement('div');
                var $delete = document.createElement('a');

                $rowPhoto.appendChild($photoCar);
                $photoCar.setAttribute('src', `${$photo.value}`);
                $photoCar.setAttribute('width', '150px');
                $photoCar.setAttribute('height', 'auto');

                $rowModel.textContent = $model.value;
                $rowYear.textContent = $year.value;
                $rowCode.textContent = $code.value;
                $rowColor.textContent = $color.value;
                $delete.textContent = `Deletar carro`;

                $row.setAttribute('data-js', 'item');
                $delete.setAttribute('data-js', 'delete');
                $delete.setAttribute('href', '#');

                $delete.onclick = function(e) {
                    e.preventDefault();
                    $row.remove();
                }
                
                $row.appendChild($rowPhoto);
                $row.appendChild($rowModel);
                $row.appendChild($rowYear);
                $row.appendChild($rowCode);
                $row.appendChild($rowColor);
                $rowDelete.appendChild($delete);
                $row.appendChild($rowDelete);
                
                $fragment.appendChild($row);

                return $fragment;
            }
        }
    })();

    app.init();

})(window.DOM);
