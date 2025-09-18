// src/services/fallbackData.js
// Fallback data when API is not available

export const fallbackHeaderData = {
  title: "Welcome to DIDX",
  paragraph: "Your trusted partner for Direct Inward Dialing (DID) services since 2005."
};

export const fallbackFeaturesData = [
  {
    title: "Global Coverage",
    icon: "fa fa-globe",
    text: "Access DIDs from over 200 countries worldwide"
  },
  {
    title: "Secure Trading",
    icon: "fa fa-shield",
    text: "Safe and secure DID trading platform"
  },
  {
    title: "24/7 Support",
    icon: "fa fa-headset",
    text: "Round-the-clock customer support"
  }
];

export const fallbackUsersData = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

export const fallbackHeroData = {
  success: true,
  message: "Hero section retrieved successfully (fallback)",
  data: {
    id: 1,
    title: "Welcome to DIDX",
    description: "Connecting the world, one country at a time!",
    content: "We provide the best DID services with global coverage...",
    type: "hero",
    page_id: 1,
    is_active: true,
    settings: {
      background_image: "/img/global-connections.jpg",
      text_color: "#ffffff",
      button_color: "#007bff"
    },
    data: {
      cta_text: "Get Started Now",
      cta_link: "/signup",
      subtitle: "Trusted by 1000+ businesses"
    },
    sort_order: 1,
    created_at: "2024-01-01T00:00:00.000000Z",
    updated_at: "2024-01-01T00:00:00.000000Z"
  }
};

