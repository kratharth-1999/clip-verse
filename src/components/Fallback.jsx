const ClipVerseFallback = () => {
    return (
        <div className="h-[calc(100vh_-_81px)] items-center justify-center flex gap-x-2 w-full">
            <img
                src="/clip_verse_logo_mini.png"
                className="w-20 h-20 cursor-pointer ml-1"
            />
            <p className="text-indigo-500 text-lg mt-4 animate-pulse">
                Loading...
            </p>
        </div>
    );
};

export default ClipVerseFallback;
