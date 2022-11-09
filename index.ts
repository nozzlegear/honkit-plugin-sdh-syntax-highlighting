import hljs = require("highlight.js");
import razor = require("highlightjs-cshtml-razor");

hljs.registerLanguage("cshtml", razor)

function highlight(lang: string, code: string) {
    const unmodified = {
        body: code,
        html: false
    }
    lang = lang?.toLowerCase();

    switch (lang) {
        case "cshtml":
        case "ts":
        case "js":
        case "diff":
        case "patch":
        case "cs":
        case "csharp":
        case "fs":
        case "fsharp":
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (e) {
                console.error(e);
                return unmodified;
            }

        default:
            return unmodified;
    }
}

export const blocks = {
    code: function (block: any) {
        return highlight(block.kwargs.language, block.body);
    }
}
