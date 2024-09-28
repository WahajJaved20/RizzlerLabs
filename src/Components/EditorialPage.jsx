import React, { useState } from "react";
import Editor from "./Editor";

function EditorialPage() {
    const [title, setTitle] = useState("1. Problem Title");
    const [problemText, setProblemText] = useState("Reverse the following string: ");
    const [explanation, setExplanation] = useState("");
    return (
        <div className="relative flex size-full min-h-screen flex-col m-4 overflow-x-hidden text-[#FFFFFF]">
            <div class="ml-8 flex flex-wrap justify-between py-4">
                <p class=" text-[48px] font-bold min-w-72">
                    {title}
                </p>
            </div>
            <p className="ml-8 text-lg">
                {problemText}
            </p>
            <Editor editorID={"problemArea"}/>
            <p className="ml-8 text-lg">
                Explain your solution
            </p>
            <Editor editorID={"explanationArea"}/>
        </div>
    )
}

export default EditorialPage;