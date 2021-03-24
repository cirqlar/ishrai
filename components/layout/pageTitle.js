import Head from "next/head";

export default function PageTitle({ title, desc }) {
  return (
    <Head>
      <title>{title} | ISHRAI</title>
      <meta name="title" content={title + " | ISHRAI"} />
      {desc && <meta name="description" content={desc} />}
    </Head>
  );
}
