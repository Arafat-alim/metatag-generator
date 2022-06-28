const tabSpacing = "   ";
const newLine = "\n";

//formating line
const formatLine = (line) => {
  return `${tabSpacing}${line}${newLine}`;
};

//social media logo tags
export const socialMediaTags = (metaData) => {
  const { title, description, url, imageUrl } = metaData;
  let socialMediaTags = formatLine("");

  socialMediaTags += formatLine(`<!--Essential Social Media Tags --!>`);

  socialMediaTags += formatLine(
    `<meta property="og:title" content="${title}"/>`
  );

  socialMediaTags += formatLine(
    `<meta property="og:description" content="${description}"/>`
  );

  socialMediaTags += formatLine(`<meta property="og:url" content="${url}"/>`);

  socialMediaTags += formatLine(
    `<meta property="og:image" content="${imageUrl}"/>`
  );

  socialMediaTags += formatLine(
    `<meta property="twitter:card" content="${imageUrl}"/>`
  );

  socialMediaTags += formatLine(
    `<meta property="og:site_name" content="${title}"/>`
  );

  socialMediaTags += formatLine(
    `<meta property="twitter:image:alt" content="${title}"/>`
  );

  return socialMediaTags;
};
export const generateMetaTag = (metaData) => {
  const { title, author, description, keyword, url } = metaData;
  let generateMetaTag = `<head>${newLine}`;

  generateMetaTag += formatLine(`<title>${title}</title>`);

  generateMetaTag += formatLine(`
  <meta name="description" content="${description}"/>
  `);
  generateMetaTag += formatLine(`
  <meta name="keyword" content="${keyword}"/>
  `);

  generateMetaTag += formatLine(`
  <meta name="author" content="${author}"/>
  `);

  generateMetaTag += formatLine(`
  <link rel="canonical" href="${url}"/>
  `);

  //! Addons for robots
  generateMetaTag += formatLine(`
  <meta name="robots" content="index, follow"/>
  `);

  generateMetaTag += socialMediaTags(metaData, generateMetaTag);

  generateMetaTag += `</head>`;
  return generateMetaTag;
};
