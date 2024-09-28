import React, { useState } from "react";
import Editor from "./Editor";

function EditorialPage() {
    const [title, setTitle] = useState("Your phone linging");
    const [explanation, setExplanation] = useState("");
    return (
        <div className="relative flex size-full min-h-screen flex-col m-4 overflow-x-hidden text-[#FFFFFF]">
            <div class="flex flex-wrap justify-between py-4">
                <p class=" text-[48px] font-bold min-w-72">
                    {title}
                </p>
            </div>
            <p className="text-lg">
                Ding dong
            </p>
            <div className=" w-[80%] rounded-xl m-8 max-h-auto min-h-56">
            <Editor />
            </div>
            
        </div>
    )
}

export default EditorialPage;