"use client";
import useLinkListEffect from "@/effects/useLinkListEffect";

const LinkList = () => {
  const { links } = useLinkListEffect();
  console.log(links);

  return (
    <div>
      <h2>List of Links</h2>
      <table>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => (
            <tr key={index}>
              <td>{link.longUrl}</td>
              <td>{link.shortUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkList;
