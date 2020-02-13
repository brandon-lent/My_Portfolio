export const customLog = (message: string, color = "black") => {
  switch (color) {
    case "success":
      color = "Green";
      break;
    case "info":
      color = "Blue";
      break;
    case "error":
      color = "Red";
      break;
    case "warning":
      color = "Orange";
      break;
    default:
      break;
  }

  console.log(`%c${message}`, `color:${color}`);
};
