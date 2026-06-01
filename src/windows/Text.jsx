import React from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    
    // 1. Grab the current window context for the text file channel safely
    const currentWindow = windows && typeof windows === 'object' && !Array.isArray(windows)
        ? windows.txtfile
        : windows?.find?.(w => w.id === "txtfile");

    const data = currentWindow?.data;

    // Early return if no text data is active or open
    if (!data) return null;

    // 2. Destructure the core text properties
    const { name, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name || "Text Editor"}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white overflow-y-auto max-h-[80vh]">
                {/* Subtitle Heading Block */}
                {subtitle ? (
                    <h3 className="text-lg font-semibold text-gray-700">{subtitle}</h3>
                ) : null}

                {/* Description Body - Maps array paragraphs or renders a fallback raw string */}
                {description && (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800">
                        {Array.isArray(description) ? (
                            description.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))
                        ) : (
                            <p>{description}</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;