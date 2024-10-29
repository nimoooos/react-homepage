import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Redirect() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [timer, setTimer] = useState(0);
  const [continueRedirect, setContinueRedirect] = useState(true);

  const links = {
    projects: "https://www.nimoooos.work/projects",
    resume: "https://www.nimoooos.work/projects",
    contacts: "https://www.nimoooos.work/contacts",
    github: "https://github.com/nimoooos",
    linkedin: "https://www.linkedin.com/in/soomin-song-dev/",
  };

  const query = links[searchParams.get("to").toLowerCase()];

  useEffect(() => {
    if (continueRedirect) {
      const interval = setInterval(() => setTimer(timer + 1), 300);
      if (timer > 10) {
        window.location.href = query;
      }
      return () => clearInterval(interval);
    }
  }, [timer, query, continueRedirect]);

  return (
    <div style={{height:"100vh", textAlign:"center", verticalAlign:"auto"}} onClick={()=>setContinueRedirect(false)}>
      {query ? (
        <>
          <p>Received query: {searchParams.get("to")}</p>
          <p>
            Redirecting to <a href={query}><code>{query}</code></a>
            {".".repeat(timer)}
          </p>
          <p>Click anywhere to stop.</p>
        </>
      ) : (
        <p>Sorry, "{query}" is not one of registered links.</p>
      )}
    </div>
  );
}
