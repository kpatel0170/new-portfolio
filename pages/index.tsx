import type { NextPage } from "next";
import Head from "next/head";
import { Home as HomePage } from "@Components/Home/Home";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Kartik | Home</title>
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta
                    property="og:title"
                    content="Hello There! | Kartik Patel"
                ></meta>
                <meta
                    name="description"
                    content="CS student at UofR"
                />
                <meta
                    name="og:description"
                    content="CS student at UofR"
                />
                <meta property="og:type" content="website" />
                <meta name="apple-mobile-web-app-title" content="Kartik" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                {/* <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
                /> */}
            </Head>
            <HomePage />
        </div>
    );
};

export default Home;
