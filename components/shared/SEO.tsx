import React from 'react'
import Head from 'next/head'

interface SEOProps {
    title?: string
}

const SEO: React.FC<SEOProps> = ({title}) => {
        return (
            <Head>
                <title>{title ? title + ' | ' :  '' } Dehidden | The Next Generation of NFTs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Dehidden makes it incredibly simple to launch smart NFT experiences in a completely visual canvas, with no-code." />
            </Head>

        );
}

export default SEO