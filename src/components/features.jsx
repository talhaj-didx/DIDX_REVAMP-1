import YoutubeEmbed from "./others/youtubeEmbed"
import GridCard from "./GridCard";

export const Features = ({ data, featuresVideos }) => {

  const {
    data: { videos = [] } = {},
  } = featuresVideos?.[0] || {};

  const {
    title = "",
    data: { features = [] } = {},
  } = data?.[0] || {};


  return (
    <div id="features" className="text-center" style={{ paddingBottom: "10px" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-title" style={{ marginBottom: "40px", marginTop: "60px" }}>
          <h2>{title || ""}</h2>
        </div>

        <GridCard features={features} />
      </div>
      {/* YouTube Videos Section Endpoint: GET /sections/videos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "60px",
          padding: "0 20px", // ✅ responsive padding instead of fixed 100px
          maxWidth: "1200px",
          margin: "60px auto 0",
        }}
      >
        {videos.map((item) => (
          <>

            <div>
              <h3 style={{ marginBottom: "15px" }}>{item?.title || "Features for DID Buyers"}</h3>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <YoutubeEmbed url={item?.url} />
                </div>
              </div>
            </div>

          </>
        ))}
      </div>
    </div>

  );
};
