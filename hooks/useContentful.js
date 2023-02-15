// React
import { useState, useEffect } from "react";

export default function useContentful(query) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}/environments/master`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_CDA}`,
        },
        // Query will be built from component. See usage below
        body: JSON.stringify({ query }),
      }
    )
      .then((res) => res.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors[0].message);
        } else {
          setData(data);
        }
      })
      .catch((error) => console.log(error));
  }, [query]);

  return { data };
}

//* Usage

// 1. Import hook
// Hook
// import useContentful from "../../hooks/use-contentful";

// 2. Build graphql query. Example below.
// Query
// const query = `
//   query aboutEntryQuery {
//     about (id: "2Ra4o9mcK67aElaoEjEqP8") {
//       sys {
//         id
//       }
//       title,
//       contentInListFormat
//     }
//   }
// `;

// 3. Use Hook
// let { data } = useContentful(query);

// 4. Do something with data
// <h1>{data.content.title}</h1>
