if ('undefined' !== typeof module) {

    module.exports = function initTypeahead(data, element) {
        console.log(data);
        console.log(element);
        var _values = new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: data
        });
        _values.initialize();

        var elt = $(element);
        elt.tagsinput({
            itemValue: 'code',
            itemText: 'value',
            typeaheadjs: {
                name: '_values',
                displayKey: 'value',
                source: _values.ttAdapter()
            }
        });
    }
}