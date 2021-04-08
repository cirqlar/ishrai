import ReactMarkdown from "react-markdown";

export default function StyledMarkdown({ renderers, ...props }) {
  const allRenderers = {
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <h1 className="font-bold text-4xl first:text-5xl">{children}</h1>;
        case 2:
          return <h2>{children}</h2>;
        case 3:
          return <h3 className="font-bold italic text-3xl first:text-4xl">{children}</h3>;
        case 4:
          return <h4>{children}</h4>;
        case 5:
          return <h5>{children}</h5>;
        case 6:
          return <h6>{children}</h6>;
      }
    },
    paragraph: ({ children }) => {
      return <p className="body-text pt-5 w-full max-w-3xl">{children}</p>;
    },
    list: ({ children, ordered }) => {
      return ordered ? (
        <ol className="body-list pt-5 max-w-3xl">{children}</ol>
      ) : (
        <ul className="body-list pt-5 max-w-3xl">{children}</ul>
      );
    },
    ...renderers,
  };

  return <ReactMarkdown renderers={allRenderers} {...props} />;
}
