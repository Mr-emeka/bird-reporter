import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
}
const SEO: FC<SEOProps> = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
