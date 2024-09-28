import React, { useEffect, useRef, useState } from "react";
import EditorJS from '@editorjs/editorjs';
import SimpleImage from "@editorjs/simple-image";
import Checklist from '@editorjs/checklist'
import List from "@editorjs/list";
import InlineCode from '@editorjs/inline-code';
import Alert from 'editorjs-alert';
import CodeBox from '@bomdi/codebox';
import DragDrop from "editorjs-drag-drop";
import Undo from 'editorjs-undo';
import "./Editor.css"
import Header from "title-editorjs";
 
const DEFAULT_INITIAL_DATA = () => {
    return {
      "time": new Date().getTime(),
      "blocks": [
        {
            type: "header",
            data: {
                text: "write a header"
            }
        },
      ]
    }
  }

function Editor() {
    const [editorData, setEditorData] = useState(DEFAULT_INITIAL_DATA);
    useEffect(() => {
        if (ejInstance.current === null) {
            initializeEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);
    const handleReady = (editor) => {
        new DragDrop(editor);
        new Undo({ editor });
    };
    const initializeEditor = () => {
        const editor = new EditorJS({
            data: editorData,
            onChange: async () => {
                let content = await this.editor.saver.save();
                setEditorData(content);
              },
            onReady: handleReady,
            holder: 'editorjs',
            autofocus: true,
            onReady: () => {
                ejInstance.current = editor;
            },
            tools: {
                image: SimpleImage,
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                inlineCode: {
                    class: InlineCode,
                    shortcut: 'CMD+SHIFT+M',
                },
                codeBox: {
                    class: CodeBox,
                    config: {
                        themeURL: 'https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css', 
                        useDefaultTheme: 'dark'
                    }
                },
                header: Header,
                alert: {
                    class: Alert,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+A',
                    config: {
                        alertTypes: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
                        defaultType: 'primary',
                        messagePlaceholder: 'Enter something',
                    },
                },

                // linkTool: {
                //     class: LinkTool,
                //     config: {
                //       endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
                //     }
                //   }

            }
        });
    }
    const ejInstance = useRef();
    return <><div id='editorjs' className="font-Manrope bg-[#242424]"></div></>;

}


export default Editor;