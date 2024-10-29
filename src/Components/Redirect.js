import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Redirect(props) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [timer, setTimer] = useState(0);
  const [continueRedirect, setContinueRedirect] = useState(true);

  const links = {
    projects: "https://www.nimoooos.work/projects",
    resume: "https://www.nimoooos.work/projects",
    contacts: "https://www.nimoooos.work/contacts",
    github: "https://github.com/nimoooos",
    linkedin: "https://www.linkedin.com/in/soomin-song-dev/",
    email: "mailto:d.song.149@gmail.com",
  };

  let query = ""; // the search key
  try {
    query = searchParams.get("to").toLowerCase();
  } catch (error) {
    query = props.override.toLowerCase();
  }
  const link = links[query]; // value based on key

  useEffect(() => {
    if (continueRedirect && link) {
      const interval = setInterval(() => setTimer(timer + 1), 300);
      if (timer > 10) {
        window.location.href = link;
        setContinueRedirect(false);
      }
      return () => clearInterval(interval);
    }
  }, [timer, link, continueRedirect]);

  return (
    <div
      style={{ height: "100vh", textAlign: "center", verticalAlign: "auto" }}
      onClick={() => setContinueRedirect(false)}
    >
      <div style={{ height: "30vh" }}></div>
      {link ? (
        <>
          <p>Received query: {query}</p>
          <p>
            Redirecting to{" "}
            <a href={link}>
              <code>{link}</code>
            </a>
            {".".repeat(timer)}
          </p>
          <p>Click anywhere to stop.</p>
        </>
      ) : (
        <p>Sorry, "{query}" is not one of registered redirects.</p>
      )}
    </div>
  );
}
