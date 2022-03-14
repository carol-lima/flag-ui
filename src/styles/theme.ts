// Theme to make it easier to update UI components
export default {
  border: {
    radius: "0.5rem",
  },
  font: {
    family: {
      industry:
        "Industry, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    },
    regular: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primary: {
      500: "#3F50B5",
    },
    secondary: {
      500: "#FF7F00",
    },
    gray: {
      50: "#F2F2F2",
      100: "#D9D9D9",
      800: "#23242A",
      900: "#0D0D0F",
    },
    status: {
      success: {},
      warning: {},
      error: {},
      disabled: "#E7E7E7",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
} as const;
