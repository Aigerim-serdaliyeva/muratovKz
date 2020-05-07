const dp = {
    SyntaxHighlighter: {}
};

dp.SyntaxHighlighter = {
    parseParams(
        input,
        showGutter,
        showControls,
        collapseAll,
        firstLine,
        showColumns
    ) {
        function getValue(list, name) {
            const regex = new XRegExp(
                '^' + name + '\\[(?<value>\\w+)\\]$',
                'gi'
            );
            let match = null;
            for (let i = 0; i < list.length; i++)
                if ((match = regex.exec(list[i])) != null) return match.value;

            return null;
        }

        function defaultValue(value, def) {
            return value != null ? value : def;
        }

        function asString(value) {
            return value != null ? value.toString() : null;
        }

        const parts = input.split(':');
        const brushName = parts[0];
        const options = {};
        const straight = { true: true };
        (reverse = { true: false }),
            (result = null),
            (defaults = SyntaxHighlighter.defaults);

        for (const i in parts) options[parts[i]] = 'true';

        showGutter = asString(defaultValue(showGutter, defaults.gutter));
        showControls = asString(defaultValue(showControls, defaults.toolbar));
        collapseAll = asString(defaultValue(collapseAll, defaults.collapse));
        showColumns = asString(defaultValue(showColumns, defaults.ruler));
        firstLine = asString(defaultValue(firstLine, defaults['first-line']));

        return {
            brush: brushName,
            gutter: defaultValue(reverse[options.nogutter], showGutter),
            toolbar: defaultValue(reverse[options.nocontrols], showControls),
            collapse: defaultValue(straight[options.collapse], collapseAll),
            // ruler			: defaultValue(straight[options.showcolumns], showColumns),
            'first-line': defaultValue(getValue(parts, 'firstline'), firstLine)
        };
    },

    HighlightAll(
        name,
        showGutter /* optional */,
        showControls /* optional */,
        collapseAll /* optional */,
        firstLine /* optional */,
        showColumns /* optional */
    ) {
        function findValue() {
            const a = arguments;

            for (let i = 0; i < a.length; i++) {
                if (a[i] === null) continue;

                if (typeof a[i] === 'string' && a[i] != '') return a[i] + '';

                if (typeof a[i] === 'object' && a[i].value != '')
                    return a[i].value + '';
            }

            return null;
        }

        function findTagsByName(list, name, tagName) {
            const tags = document.getElementsByTagName(tagName);

            for (let i = 0; i < tags.length; i++)
                if (tags[i].getAttribute('name') == name) list.push(tags[i]);
        }

        const elements = [];
        const highlighter = null;
        const registered = {};
        const propertyName = 'innerHTML';
        // for some reason IE doesn't find <pre/> by name, however it does see them just fine by tag name...
        findTagsByName(elements, name, 'pre');
        findTagsByName(elements, name, 'textarea');

        if (elements.length === 0) return;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            let params = findValue(
                element.attributes.class,
                element.className,
                element.attributes.language,
                element.language
            );
            const language = '';
            if (params === null) continue;

            params = dp.SyntaxHighlighter.parseParams(
                params,
                showGutter,
                showControls,
                collapseAll,
                firstLine,
                showColumns
            );

            SyntaxHighlighter.highlight(params, element);
        }
    }
};
