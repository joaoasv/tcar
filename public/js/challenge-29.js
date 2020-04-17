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
                var html = `
                <li>
                    <div>${$photo.value}</div>
                    <div>${$model.value}</div>
                    <div>${$year.value}</div>
                    <div>${$code.value}</div>
                    <div>${$color.value}</div>
                </li>`;
                $results.innerHTML += html;
                return clear();
            }
        }
    })();

    app.init();

})(window.DOM);
