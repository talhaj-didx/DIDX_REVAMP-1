// YoutubeEmbed.js
import React from "react";
import PropTypes from "prop-types";

function parseYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1);
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/watch")) return u.searchParams.get("v");
      if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2];
      if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2];
      if (u.pathname.startsWith("/live/")) return u.pathname.split("/")[2];
    }
  } catch (e) {
    // not a URL, maybe a raw id
    return url;
  }
  return null;
}

export default function YoutubeEmbed({ url, title }) {
  const id = parseYouTubeId(url);
  if (!id) return null;

  // Responsive 16:9 container
  return (
    <div style={{ overflow: "hidden", paddingBottom: "56.25%", position: "relative", height: 0, borderRadius: 12 }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, borderRadius: 12 }}
      />
    </div>
  );
}

YoutubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
