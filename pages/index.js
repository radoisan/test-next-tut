// pages/index.js
import Link from 'next/link';

import Layout from "../components/Layout";

const Index = () => (
    
    <Layout>
        <br /> 
        <Link href="/explore">
            <a>Welcome to Our Page! Start Exploring now!</a>
        </Link>
    </Layout>

);

export default Index;