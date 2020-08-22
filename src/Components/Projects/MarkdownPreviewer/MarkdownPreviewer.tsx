import * as React from "react";
import './MarkdownPreviewer.scss';
import TextField from '@material-ui/core/TextField';
let marked = require("marked");
// import {marked} from 'marked';

export const MarkdownPreviewer = () => {
    const [markdown, setMarkdown] = React.useState<string>("### Hello World!\n* Edit text in the left\n* Conversion in the right");
    const lines = 10;

    const updateMarkdown = (text: string) => {
        setMarkdown(text);
    }
    return (
        <div className="App">
            <h2 className="gradient-font">Markdown Previewer</h2>
            <div className="boxes">
                <TextField
                    className="box"
                    id="outlined-multiline-static"
                    label="Markdown Input"
                    multiline
                    rows={lines}
                    defaultValue={markdown}
                    onChange={(e) => { updateMarkdown(e.target.value) }}
                    variant="outlined"
                />
                <div
                    className="preview box"
                    dangerouslySetInnerHTML={{ __html: marked(markdown) }}
                >
                </div>
            </div>
        </div>
    );
}