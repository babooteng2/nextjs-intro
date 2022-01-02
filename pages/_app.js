import NavBar from "../components/NavBar";

export default function APP({Component, pageProps}) {
    return <>
        <NavBar />
        <Component {...pageProps}/>
        <style jsx global>{`
            a {color: white}
        `}</style>
    </>
}