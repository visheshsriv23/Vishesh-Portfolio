import React from 'react';
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const ImageWindowComponent = () => {
    const { windows } = useWindowStore();
    
    // 1. Grab the current window context for the image channel safely
    const currentWindow = windows && typeof windows === 'object' && !Array.isArray(windows)
        ? (windows.imgfile || Object.values(windows).find(w => w.data?.image || w.data?.imageUrl))
        : windows?.find?.(w => w.id === "imgfile" || w.fileType === "img");

    const data = currentWindow?.data || currentWindow;

    // Early return if no image file is active or open
    if (!data) return null;

    // 2. Extract properties with fallbacks
    const name = data.name || "Image Preview";
    const imageSource = data.image || data.imageUrl || null;

    return (
        <>
            <div id="window-header">
                {/* Tie target controls directly to your image file wrapper identifier */}
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-4 bg-gray-100 overflow-y-auto max-h-[80vh] flex items-center justify-center min-h-[200px]">
                {imageSource ? (
                    <div className="overflow-hidden rounded-lg shadow-md bg-white p-2 max-w-full">
                        <img 
                            src={imageSource} 
                            alt={name} 
                            className="max-w-full h-auto object-contain max-h-[500px] block mx-auto"
                            onError={(e) => {
                                console.error("Vite runtime asset path resolution error for path:", imageSource);
                            }}
                        />
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">No image source specified.</p>
                )}
            </div>
        </>
    );
};

// Wrapped and targeted specifically for the "imgfile" state toggle layer
const ImageWindow = WindowWrapper(ImageWindowComponent, "imgfile");
export default ImageWindow;