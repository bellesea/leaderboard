import React from "react";
import Head from "next/head";

const makeTitle = (title, name) =>
  title === name ? title : `${title} – ${name}`;

const site_description =
  "Welcome to Hack Club Leaderboard, A place where we give recoginition to Hack Clubs doing amazing work";
const side_keywords =
  "leaderboard,hack club,hack club leaderboard,club profiles";
const site_og_img =
  "https://raw.githubusercontent.com/bajpai244/indiablogfilehosting/main/files/Screenshot%202021-08-20%20at%203.31.43%20PM.png";

const Meta = ({
  as: ElementType = Head,
  name = "Hack Club", // site name
  title = "Leaderboard", // page title
  description = site_description,
  image = site_og_img,
  color = "#ec3750",
  manifest = "https://assets.hackclub.com/favicons/site.webmanifest",
  children,
}) => (
  <ElementType>
    <meta key="og_locale" property="og:locale" content="en_US" />
    <meta key="og_type" property="og:type" content="website" />
    <meta key="og_site" property="og:site_name" content={name} />
    <meta key="tw_site" name="twitter:site" content="@hackclub" />
    <title key="title">{makeTitle(title, name)}</title>
    <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
    <meta
      key="tw_title"
      name="twitter:title"
      content={makeTitle(title, name)}
    />
    {description && (
      <React.Fragment>
        <meta key="desc" name="description" content={description} />
        <meta key="og_desc" property="og:description" content={description} />
        <meta key="tw_desc" name="twitter:description" content={description} />
      </React.Fragment>
    )}
    {image && (
      <React.Fragment>
        <meta key="og_img" property="og:image" content={image} />
        <meta key="tw_card" name="twitter:card" content="summary_large_image" />
        <meta key="tw_img" name="twitter:image" content={image} />
      </React.Fragment>
    )}
    <meta key="theme_color" name="theme-color" content={color} />
    <meta key="tile_color" name="msapplication-TileColor" content={color} />
    <link
      key="safari_icon"
      rel="mask-icon"
      href="https://assets.hackclub.com/favicons/safari-pinned-tab.svg"
      color={color}
    />
    <link
      key="apple_icon"
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://assets.hackclub.com/favicons/apple-touch-icon.png"
    />
    <link
      key="favicon_32"
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://assets.hackclub.com/favicons/favicon-32x32.png"
    />
    <link
      key="favicon_16"
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://assets.hackclub.com/favicons/favicon-16x16.png"
    />
    {manifest && <link key="manifest" rel="manifest" href={manifest} />}
    {children}
  </ElementType>
);

export default Meta;
