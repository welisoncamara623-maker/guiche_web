export function VideoTurne() {
    return (
        <div id="video" className="w-full max-w-5xl md:max-w-[95%] mt-10 mb-4 mx-auto">
            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full shadow-lg"
                    src="https://www.youtube.com/embed/B-Cmf90Xk2A"
                    title="Manifesto Musical - Turnê 2026"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
