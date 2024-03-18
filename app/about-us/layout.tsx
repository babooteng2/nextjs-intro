export const metadata = {
    title: 'About us',
};

export default function SubLayout({children}: {children:React.ReactNode}) {
    return (
        <div>            
            {children}
            &copy; Next JS is great!
        </div>
    );
}