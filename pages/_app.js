import Layout from "../components/Layout";

export default function APP({Component, pageProps}) {
    return <>
        <Layout>
            <Component {...pageProps}/>        
        </Layout>
    </>
}