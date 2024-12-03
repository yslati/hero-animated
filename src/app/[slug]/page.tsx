import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center min-h-screen font-inter_medium bg-background">
            <h1 className="text-8xl">404</h1>
            <p className="text-xl">Page not found</p>
            <Link href="/">
                <button className="border-[3px] border-foreground rounded-xl px-5 py-1 mt-5 hover:bg-foreground hover:text-background transition-colors duration-300">
                    Go back
                </button>
            </Link>
        </div>
    );
}
 
export default NotFound;